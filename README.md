## Human Trafficking

# Overview
Human trafficking is a worldwide problem that affects millions of people. Traffickers use other humans to generate a profit for themselves at the victim’s expense. The most vulnerable to becoming victims of human trafficking are those who’s basic needs are unmet. The lack of necessities is one of the ways traffickers will prey on victims. Most trafficked victims believe they are indebted to their traffickers in some way or are controlled by the trauma bond they develop with their trafficker. Identifying the signs of human trafficking will help to prevent people from becoming prey to traffickers’ tactics and ensure that current victims can get the help they need to leave.

## Purpose
The purpose of our final project was to search for trends in human trafficking in order to predict possible outcomes based on the victim’s gender, age, relationships, and citizenship and how these relate to the activity the victims are forced into.

Our team also took a look at the status of the victim’s country of origin and how that might affect the number of victims.

## Choosing
Our initial thoughts on the matter were how awful this situations is across the country as well as around the world. As a way to evoke consciousness maybe, or as a personal exercise of empathy, we decided to work with this dataset, trying to discover what story could it be telling us. 

## Sources of Data
- Polaris: The Counter-Trafficking Data Collaborative (CTDC) is a joint project of Polaris and the first global data hub on human trafficking

- The World Bank: Global Poverty Working Group Data is compiled from official government sources or are computed by World Bank staffing using national poverty lines

- World Economic Outlook: WEO database contains selected macroeconomic data series and is used to find data on national accounts reported by International Monetary Fund

- DataHub: Geodata data package providing geojson polygons for all the world’s countries

- Nations Online Project: List of ISO Alpha-2, Alpha-3, and Numeric Country Codes to join data sets together

## Questions?
### Does the victim's age, gender, relationship to their recruiter and citizenship predict the type of exploitation?
Polaris-reported human trafficking appears to fall in to one of five major types of exploitation: sexual, forced labor, forced marriage, slavery and other/multiple exploits.

### Is it possible to predict the type of labor a trafficking victim may be forced in to given age, gender, recruiter relationship, citizenship and type of control?
There are several categories of forced labor reported, although data is not as complete as for other features.

### Is it possible to predict the number of trafficking victims based on certain economic factors (such as GDP, Population, Poverty Rate, and Unemployment Rate)?
Does high unemployment and/or low economic productivity increase the likelihood that trafficking may be more prevalent in a given country?

## Machine Learning Model
### Data Pre-Processing
Many features/columns had to be consolidated and combined to prevent data loss. Each Jupyter Notebook has additional details.

### Feature Engineering
As we had a known outcome (our Polaris dataset related to known victims of human trafficking), a supervised learning model with multi-class logistic regression was chosen. This required that categorical data be converted to numerical and, in certain instances, scaled due to the disparities between certain features. Features were chosen based on research on human trafficking and based on the data publicly available.

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
<img src="https://github.com/gh-mrmoore/AnalyticsFinalProject/blob/main/Database/group5_final_erd.png" alt="Basic ERD for PostgreSQL database." />

### Joins
SQL was used to create a view within the database that provides a reference between 2-character and 3-character country ISO codes.

### SQLAlchemy Connection String
As we upload our cleaned data to the database and then draw that data down from the database for analysis in our models, multiple connections were made using SQLAlchemy. The connection strings have not been pushed to GitHub as they are they relate to a live database.

## Dashboard
### Storyboard
Please see [our final presentation](https://github.com/gh-mrmoore/AnalyticsFinalProject/blob/main/Segment-4/Group5_FinalProject.pptx) for our storyboard and topics we'll be covering.

### Heroku Dashboard
Please see [our Heroku site](https://ku-group5.herokuapp.com/). Please allow a moment for the site to load.

## Team
* Santiago Quintero
* Michelle Escobar
* Michelle Villafria
* Matthew Moore