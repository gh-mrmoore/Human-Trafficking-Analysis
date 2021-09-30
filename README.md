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
### Does the victim's age, gender, relationship to their recruiter and citizenship predict the type of exploitation?
Polaris-reported human trafficking appears to fall in to one of five major types of exploitation: sexual, forced labor, forced marriage, slavery and other/multiple exploits.
*Placeholder text pending further research and consolidation of group efforts to this point.*

### Is it possible to predict the type of labor a trafficking victim may be forced in to given age, gender, recruiter relationship, citizenship and type of control?
There are several categories of forced labor reported, although data is not as complete as for other features.
*Placeholder text pending further research and consolidation of group efforts to this point.*

### Is it possible to predict the number of trafficking victims based on certain economic factors (such as GDP and unemployment rate)?
Does high unemployment and/or low economic productivity increase the likelihood that trafficking may be more prevalent in a given country?
*Placeholder text pending further research and consolidation of group efforts to this point.*

## Machine Learning Model
### Data Pre-Processing
Many features/columns had to be consolidated and combined to prevent data loss. Each Jupyter Notebook has additional details.

### Feature Engineering
As we had a known outcome (our Polaris dataset related to known victims of human trafficking), a supervised learning model with multi-class logistic regression was chosen. This required that categorical data be converted to numerical and, in certain instances, scaled due to the disparities between certain features. Features were chosen based on research i to human trafficking and based on the data publicly available.

### Training/Testing Splits
Data was split in to training and testing sets using the `train_test_split` module available in Sci-Kit Learn. Modifications to the sets are pending further EDA and review.

### Model Choice
After initial trials with unsupervised and neural-network learning models, consultations led us to a supervised learning model. Using both multi-class logistic regression and linear regression, we hope to be able to predict outcomes to our questions as listed above. As yet, multiple regression (using various factors to try and forecast the number of cases in a given country for a given year) has proven less than reliable.

## Database Integration
### Data Storage
Our project is using PostgreSQL hosted via Heroku (heroku.com).

### Project interface
Our database hosts migrated historical data from a variety of sources that is linked to our models using SQLAlchemy.

### Schema
Our database includes at least 4 primary data tables.
<img src="https://github.com/gh-mrmoore/AnalyticsFinalProject/blob/main/Segment-2/Database/ERD.png" alt="Basic ERD for PostgreSQL database." />

### Joins
SQL was used to create a view within the database that provides a reference between 2-character and 3-character country ISO codes.

### SQLAlchemy Connection String
As we upload our cleaned data to the database and then draw that data down from the database for analysis in our models, multiple connections were made using SQLAlchemy. The connection strings have not been pushed to GitHub as they are they relate to a live database.

## Dashboard
### Storyboard
Please see [our initial presentation](https://github.com/gh-mrmoore/AnalyticsFinalProject/blob/main/Segment-2/Group5_FinalProject.pptx) for a draft of our storyboard and topics we'll be covering.

## Communication Protocols
### Needs
As each team member will contribute to different parts of the project over time, communication throughout each segmenet of the project is essential. Communication will be maintained regularly meetings will be planned according to team members' schedules.

### Tools
We plan to use a combination of Jupyter Notebooks, Python, plotly, MapBox, d3 and likely other libraries to, hopefully, host our project on Heroku.

### Interactive Elements
Best case scenario will be an interactive use of our models. We also plan to have interactive heat maps on various statistics and charts. Deployment particulars may affect this goal. A rough mock-up of our site is below:
<img src="https://github.com/gh-mrmoore/AnalyticsFinalProject/blob/main/Segment-2/Dashboard/web_dashboard_rough_draft.png" alt="Web Dashboard Draft" />

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
* Santiago Quintero
* Michelle Villafria
* Matthew Moore