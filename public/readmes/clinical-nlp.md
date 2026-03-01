# Clinical NLP Pipeline

## Overview
Transformer-based NLP system for extracting diagnosis trajectories and treatment timelines from physician notes.

## Business Problem
Clinical teams had critical insights trapped in unstructured text, creating delays in coding, reporting, and downstream analytics.

## Objectives
- Extract medical entities and temporal relations from free-text notes
- Improve coding throughput without reducing quality
- Support explainable outputs for compliance reviews

## Data
- De-identified physician notes
- ICD-aligned coding labels
- Historical coding decisions for weak supervision

## Modeling Approach
1. Tokenization and section-aware preprocessing
2. Domain-adapted transformer fine-tuning
3. NER + relation extraction pipeline
4. Confidence scoring and review routing

## MLOps and Deployment
- Dockerized inference API with horizontal scaling
- Offline retraining pipeline with model registry
- Error analysis dashboard for annotation feedback loops

## Results
- F1 score: 0.91 on held-out evaluation set
- Coding throughput improvement: 32%
- Reduced manual chart review burden in pilot units

## Tech Stack
PyTorch, Transformers, spaCy, Docker, MLflow

## Future Improvements
- Add retrieval augmentation using medical ontologies
- Improve long-document context handling for complex cases
