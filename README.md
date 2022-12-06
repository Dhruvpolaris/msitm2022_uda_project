# Movie RECOMMENDATION Engine

## Live Project: https://dhruvpolaris.github.io/msitm2022_uda_project/

## Problem Statement
### Background: 

- Movie recommendations systems currently in use only take into consideration the attributes associated with a movie like genre, critic rating, etc. to recommend movies. 
- Recommendation systems in streaming platforms like Netflix  estimate the likelihood that you will watch a particular title in their catalog based on factors like viewing history, how you rated other titles, other members with similar tastes and preferences on their service, and information about the titles, such as their genre, categories, actors and release year. 
- These systems do not incorporate other individuals reviews on the movie. 

### Relevance: 

Customer Retention is a major factor driving the revenues of OTT platforms and in order to keep the customer engaged with their content, the recommendations these systems should offer should be relevant, tailor made and not generic.

### Objective: 

Design a user review driven movie recommendation system.

## Steps

- Scraped the user reviews for a movie from imdb
- Identified the top genres i.e Drama, Comedy, Crime, Action, Romantic etc.
- Took the top 50 movies or shows imdb of the respective genres and scraped the user 
- Scrapping done using selenium

## Topic Modeling

- In order to identify what the crowd is talking about we performed topic modeling 
- Main motivation to identify the topics which matter the most
- Number of topics 30

## Spacy Similarity
### Used Spacy instead of Cosine as it takes into consideration word embeddings

## Sentiment score
### Sentiment over 5 word window on either side

## Insights
- Recommendations outside the general scope, the wisdom of the crowd is reflected in it.
- Movies that are categorized in a particular genres are considered in other genres as well.
- Based on the 30 topics identified using topic modeling, 7 genres i.e action, comedy, drama, romantic, crime, sci-fi and  thriller are the most common among the 15 mentioned in imdb.
- Lift values of (action, crime),(sci-fi, thriller) and (comedy, drama) are high so they are associated together in the prompts to the user.

## Team Members

- Ishaan Buch
- Ananta Annadatha
- Dhruva Phulsundar
- Varun Reddy Ponapu Reddy
- Vipul Sahni
- Ramanjeet Saini

#### Website Background Credits: netflix.com
