'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { analyzeImage } from '@/app/actions/analyzeImage'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, Loader2 } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface AnalysisState {
  prediction?: string;
  error?: string;
}

export default function Dashboard() {
  const [analysisState, setAnalysisState] = useState<AnalysisState>({})
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    try {
      setIsSubmitting(true)
      setAnalysisState({})
      
      const result = await analyzeImage(formData)
      
      if (result.success && result.prediction) {
        setAnalysisState({ prediction: result.prediction })
      } else {
        setAnalysisState({ error: result.error || 'Failed to analyze image' })
      }
    } catch (error) {
      console.error('Error:', error)
      setAnalysisState({ 
        error: error instanceof Error ? error.message : 'An unexpected error occurred' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setAnalysisState({ error: 'Image size should be less than 5MB' })
        e.target.value = ''
        setImagePreview(null)
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => setImagePreview(e.target?.result as string)
      reader.onerror = () => setAnalysisState({ error: 'Failed to read image file' })
      reader.readAsDataURL(file)
    } else {
      setImagePreview(null)
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Input</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="image" className="block text-sm font-medium mb-2">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-violet-50 file:text-violet-700
                          hover:file:bg-violet-100"
                required
              />
              <p className="mt-1 text-sm text-gray-500">
                Maximum file size: 5MB
              </p>
            </div>

            {imagePreview && (
              <div className="mt-2">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="max-w-full h-auto rounded-lg border"
                />
              </div>
            )}

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                Additional Information
              </label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={3}
                placeholder="Enter any additional information about the patient or symptoms"
                className="mt-1 block w-full"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting || !imagePreview}
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze Image'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="flex-1">
        <CardHeader>
          <CardTitle>AI Prediction</CardTitle>
        </CardHeader>
        <CardContent>
          {analysisState.error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {analysisState.error}
              </AlertDescription>
            </Alert>
          ) : analysisState.prediction ? (
            <div className="prose max-w-none">
              <p className="text-base leading-7">{analysisState.prediction}</p>
            </div>
          ) : (
            <p className="text-gray-500">
              Upload an image and submit to see the AI prediction.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

