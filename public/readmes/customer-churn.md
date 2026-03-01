# Customer Churn Prediction Platform

## Overview
Production-grade ML platform that predicts customer churn risk and supports targeted retention campaigns.

## Business Problem
Subscription retention teams lacked an early-warning system to identify high-risk users and prioritize interventions.

## Objectives
- Predict 30-day churn probability at account level
- Explain individual predictions for commercial teams
- Integrate actions into CRM workflows

## Data
- Product usage events (session depth, feature coverage, inactivity windows)
- Billing behavior and plan transitions
- Support interactions and sentiment tags

## Modeling Approach
1. Baseline logistic regression for calibration checks
2. XGBoost classifier tuned with stratified cross-validation
3. SHAP-based explainability for account-level drivers
4. Decision policy to optimize retention spend

## MLOps and Deployment
- FastAPI inference service with feature store integration
- Batch scoring nightly via scheduled jobs
- Drift and performance monitoring with threshold-based alerts

## Results
- AUC: 0.89
- Recall at top-decile risk bucket: 0.74
- Quarterly churn reduction: 18%
- Estimated ARR protected: $2.1M

## Tech Stack
Python, XGBoost, SHAP, FastAPI, PostgreSQL, AWS

## Future Improvements
- Add uplift modeling for treatment optimization
- Introduce online features for near-real-time scoring
