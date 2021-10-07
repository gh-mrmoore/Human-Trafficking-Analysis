-- PostgreSQL on Heroku seems to have some peculiarities to it.
-- Could also be a result of the mulitple interfaces being used.
SELECT * FROM public."WEO_GDP" gdp
LEFT JOIN public."Country_Codes" cc
ON gdp."ISO" = cc.country_iso3;