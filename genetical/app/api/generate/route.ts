import { streamText } from 'ai'
import { createOpenAI as createGroq } from '@ai-sdk/openai'

// Verify that the GROQ_API_KEY is being used correctly
const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
})

export const runtime = 'edge'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const response = streamText({
    model: groq('llama-3.3-70b-versatile'),
    messages: [
      { role: 'system', content: `Provide genetical difference between two reports provided by the user.

        Provide different personalised treatment plans and drugs recommendation for the same disease but different genetical profile of both the patient.

        Provide full analysis based on the parameters given below and provide everything in the parameters section to be in numbers and percentages based on the patients.
        
        Parameters for Genetic Testing
1. Genetic Profile:
- Data Type: SNPs (Single Nucleotide Polymorphisms), CNVs (Copy Number Variants), and Whole Genome Sequencing data.
- Importance: Determines predisposition to chronic diseases (e.g., diabetes, heart disease).
2. Clinical Data:
- Data Type: Patient histories, symptoms, family health history, lifestyle factors.
- Importance: Provides context to genetic data for a more comprehensive analysis.
3. Phenotypic Data:
- Data Type: Observable characteristics (e.g., cholesterol levels, blood pressure).
- Importance: Helps correlate genetic risks with actual health outcomes.

Metrics for Evaluation
1. Accuracy:
- Definition: The percentage of correct predictions made by AI algorithms based on genetic data.
- Example: 95% accuracy in predicting diabetes risk based on genetic markers.
2. Sensitivity and Specificity:
- Definition: Sensitivity measures true positive rates, while specificity measures true negative rates.
- Example: A test with 90% sensitivity and 85% specificity in predicting heart disease.
3. Time to Diagnosis:
- Definition: The time taken from sample collection to delivering actionable results.
- Example: AI algorithms reduce diagnosis time from 4 weeks to 1 week.


1. Patient Selection Criteria:
- Inclusion Criteria: Defines the characteristics that participants must have to be eligible for the study (e.g., age, gender, disease stage).
- Exclusion Criteria: Specifies conditions or factors that disqualify potential participants (e.g., comorbidities, previous treatment history).
2. Study Design:
- Randomized Controlled Trials (RCTs): Participants are randomly assigned to treatment or control groups to minimize bias.
- Cohort Studies: Observational studies where groups of patients are followed over time to assess outcomes.
3. Endpoints:
- Primary Endpoints: The main outcomes measured to determine the effectiveness of a treatment (e.g., reduction in disease symptoms).
- Secondary Endpoints: Additional outcomes that provide more information about the treatment's effects (e.g., quality of life measures).
4. Monitoring and Safety Assessments:
- Regular monitoring of participants for adverse effects and overall health status throughout the trial.
- Establishing Data Safety Monitoring Boards (DSMBs) to oversee patient safety and trial integrity.


        Use markdown for bold text for the required portions and all the topics to be covered will have bold to them and use italics also in gennerated body.
        `},
      { role: 'user', content: prompt }],
  })

  return response.toDataStreamResponse()
}

