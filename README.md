# Analytics Final Project

## Human Trafficking

## Purpose
Search for trends in human trafficking, through data, in order to predict possible outcomes, based on gender, age, immigration status, among others, and how these relate to the activity the victims are forced into.

## Choosing
Our initial thoughts on the matter where how awful this situations is, across the country as well as around the world. So, as a way to evoke consciousness maybe, or as a personal exercise of empathy, we decided to work with this dataset, trying to discover what story could it be telling us. 

## Source of data
Our analysis is based on a csv file, consisting of 63 columns and nearly 50,000 rows of data.
In columns we have year, gender, age, majority status(when trafficked started for them),  tactics to scare, threat or maintain the power relationship between the victims and their "recruiter".
Type of labor is another interesting column, wich will take our attention later in the machine learning model.
Finally the recruiter relation to the victims is shown. 

## Questions?
### Does the victim's age, gender, relationship to trafficker, and citizenship predict the victim's purpose?
#### Data
For this analysis, we will be relying solely on the Polaris trafficking data. The final data from the ETL process will be pared further to reduce the number of features necessary for this analysis only.

#### Model
Given an input set, we are trying to predict an outcome. In our base set, we have a known outcome (the victim's purpose, which is mostly known from the case data). Can we use a supervised machine learning model or a neural-network learning model to predict the type of exploit?
*After consultation following poor outcomes from initial modeling attempts, a better approach will be to use a supervised learning model with a multi-class logistic regression.*

#### Output
We need the model to predict one of six different exploit categories derived from our data and ETL process.

### If the victim's purpose is for forced labor, what areas of labor are they being forced into based on the criteria above?
#### Data
For this analysis, we will rely on the Polaris trafficking data. The final data from the ETL process will be pared further to reduce the number of features and will be filtered to only those instances where the trafficking victim was forced to perform some type of labor.

#### Model
Similar to the above, there is a known outcome and an unsupervised or neural-network learning model may be able to predict the type of exploit.

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

## Communication Protocols
### Needs
As each team member will contribute to different parts of the project over time, communication throughout each segmenet of the project is essential. Communication will be maintained regularly meetings will be planned according to team members' schedules.

### Purpose
Efficient collaboration between teammates can either make or break a project. Communication, as part of collaboration is essential for success. Regular updates to stakeholders can help to remove blockages from a given workflow and can allow parallel development of different aspects of a given project without one necessarily waiting on another.

### Methods
#### GitHub Projects
A basic Kanban project has been created in the Project GitHub repository. This will enable team members to track progress as items are completed.

#### Slack
Using Slack to message other team members and share resources will be essential. Sharing links and possibly files via Slack should improve the quality of work.

#### Zoom
Regular Zoom meetings (both during and outside of regular class time) will be held to accomplish the following:
- Brainstorm
- Troubleshoot
- Plan for next steps
- Debate and determine best models and/or datasets and/or technologies

#### Canvas
As provided by the class instructor and teaching assistants, a calendar and other resources are available in Canvas. Meetings will be posted on the calendar and other resources (Collaborations, Files, Discussions, etc) shall be utilized when or if appropriate.

### Cadence
The group shall meet at least twice weekly (Monday and Wednesday during regularly scheduled class time) and as often as possible or necessary outside of the regular, twice-weekly, meetings.

## Team
Santiago Quintero
Michelle Escobar
Michelle Villafria
Matthew Moore