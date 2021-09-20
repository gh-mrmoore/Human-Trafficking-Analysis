## Questions:
### Does the victim's age, gender, relationship to trafficker, and citizenship predict the victim's purpose?
#### Model
Given an input set, we are trying to predict an outcome. In our base set, we have a known outcome (the victim's purpose, which is mostly known from the case data). Can we use a supervised machine learning model or a neural-network learning model to predict the type of exploit?

#### Output
We need the model to predict one of six different exploit categories derived from our data and ETL process.

### If the victim's purpose is for forced labor, what areas of labor are they being forced into based on the criteria above?
#### Model
Similar to the above, there is a known outcome and a supervised or neural-network learning model may be able to predict the type of exploit.

#### Output
We need the model to predict the type of forced labor. In other words, the model needs to be able to categorize each input.

### How does a country's GDP, unemployment rate, inflation, and population affect the number of victims from that country?
#### Model
We have data sources for each item, we just need a model to predict the outcome. We don't know what the outcome will be and the inputs could be scattered (high to low over 4 features). We don't know what the outcome will be beyond the total number of cases in each country. Here, a neural-network model or, possibly a supervised model would likely be our best option to create a model.

#### Output
Here, a regression would likely be most useful. Since we want to see the effect of various variables on a given outcome (number of trafficking victims), a regression, not classification solution would seemingly be best.

### Additionally, do countries with high unemployment rate have more victims since victims can be used for cheaper/forced labor?
#### Model
Don't believe there will need to be a predictive model here.

#### Output
Tabular and graphical. Data should be easily visualized either on a chart or on a map. Tabular data to support the graphical display, but not as a primary feature.

### Is the number of human trafficking cases increasing over the years?
#### Model
A relatively straightforward analysis and visualization, no modeling will be necessary here.

#### Output
Tabular and graphical. Data should be easily visualized year over year with tabular data as a supporting, but not primary, feature.