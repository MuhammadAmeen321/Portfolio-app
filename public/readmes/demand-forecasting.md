# Demand Forecasting Dashboard

## Overview
A forecasting and decision-support system that estimates demand across regions and product categories.

## Business Problem
Operations teams faced recurring stockouts and overstock due to fragmented planning workflows and unstable forecast quality.

## Objectives
- Provide accurate multi-horizon demand forecasts
- Surface uncertainty bands for better planning decisions
- Expose results in executive and operational dashboards

## Data
- Historical sales by SKU, region, and channel
- Seasonality and promotional calendars
- External signals (holiday index and macro indicators)

## Modeling Approach
1. Data quality checks and missing value strategy
2. Feature engineering for seasonality, lags, and promos
3. Hybrid model selection (Prophet + LightGBM)
4. Ensemble strategy by segment performance

## Deployment and Monitoring
- Automated retraining schedule each week
- Forecast snapshots persisted for auditability
- Dashboard with actual-vs-forecast tracking

## Results
- MAPE improvement: 21% versus prior baseline
- Stockout reduction: 27% across six regions
- Better planning lead-time and service-level stability

## Tech Stack
Python, Pandas, Prophet, LightGBM, Power BI

## Future Improvements
- Integrate causal forecasting for campaign effects
- Expand to hierarchical reconciliation by SKU families
