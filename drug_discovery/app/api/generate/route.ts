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
      { role: 'system', content: `Provide all the metrics numbers for any drugs in question.

        Provide the best choice of compound the primary compound can work with and provide  analysis when both are mixtured.
        
        Metrics used for analysis
1. Ligand Efficiency (LE): Measures the potency of a compound relative to its size, often calculated as pIC50 divided by the number of heavy atoms.
2. Lipophilic Efficiency (LipE or LLE): Combines potency with lipophilicity, ensuring compounds have high potency while maintaining low lipophilicity to avoid issues like poor solubility and metabolic instability.
3. Binding Efficiency Index (BEI) and Percent Efficiency Index (PEI): These metrics further refine the selection process by considering the binding efficiency and percent inhibition relative to the molecular weight.
4. Desirability Functions and Pareto Optimization: These methods help in balancing multiple objectives and identifying compounds that meet multiple criteria optimally.

1. Data Collection and Management:
- Types of Data:
         Patient health records
         Clinical trial results
         Genomic data
- Metrics:
         Data accuracy (% of incorrect entries)
         Data completeness (percentage of missing values)
         Data accessibility (time taken to retrieve data)
2. AI Integration:
- Machine Learning Models:
          Predictive modeling for drug efficacy
          Natural Language Processing (NLP) for extracting insights from medical literature
- Metrics:
          Model accuracy (percentage of correct predictions)
          Precision and recall (true positives vs. false positives)
          Time to train models
3. Patient and Doctor Interaction:
- User Interface:
           Software usability for patients and doctors
- Metrics:
           User satisfaction rating (from surveys)
           Time taken for users to complete tasks (e.g., accessing health reports)
            Engagement metrics (frequency of use)
4. Regulatory Compliance:
- Adherence to Guidelines:
            Compliance with local health regulations in India
- Metrics:
            Audit success rate (percentage of audits passed)
            Time to achieve compliance (from implementation to approval)




Example: Optimizing a Compound Using MPO and AI
Scenario

Suppose we are developing a new compound for treating hypertension and need to optimize it based on several parameters.

Parameters and Metrics:

Potency: Measured by pIC50 (the negative logarithm of the concentration that inhibits 50% of the target).
Ligand Efficiency (LE): pIC50 / Number of Heavy Atoms.
Lipophilic Efficiency (LLE): pIC50 - logP (where logP is the lipophilicity measure).
Molecular Weight: Targeting a molecular weight below 500 Da.
Solubility: Ensuring adequate aqueous solubility.

Example Compound:

Let's consider a hypothetical compound, Compound X:
pIC50: 8.0
Number of Heavy Atoms: 37
logP: 3.2
Molecular Weight: 518 Da

Calculations:

LE: 8.037≈0.216378.0≈0.216 (target LE > 0.3, so this compound needs improvement)
LLE: 8.0−3.2=4.88.0−3.2=4.8 (target LLE > 5, so this compound is somewhat acceptable but could be better)
Percent Efficiency Index (PEI): 0.50.518 kg/mol≈0.9650.518kg/mol0.5≈0.965 (this is relatively good but depends on the context)

AI-Driven Optimization:

Using AI algorithms, such as machine learning models, we can predict the effects of modifying the compound's structure on these metrics. For example:

Predictive Modeling: AI suggests adding a hydrophilic group to reduce logP and improve solubility without significantly affecting potency.
High-Throughput Screening: AI identifies similar compounds with better LE and LLE metrics, guiding the synthesis of new analogs.

By integrating these approaches, we can iteratively optimize Compound X to meet or exceed the desired metrics, ensuring it has a high likelihood of success in clinical trials.

        Use markdown for bold text for the required portions and all the topics to be covered will have bold to them and use italics also in gennerated body.
        `},
      { role: 'user', content: prompt }],
  })

  return response.toDataStreamResponse()
}

