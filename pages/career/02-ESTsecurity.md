title: ESTsecurity
tags: [python, crawler]

## Summary

+ July 2020 ~ February 2021
+ PMS-MPI Cell (Internship)
+ Python Crawler Optimization
  + Reduced collection time by over 80%, from 3 hours to under 30 minutes
+ Automation of Manual Data Entry
  + Decreased the time required for this task from over an hour to less than 10 minutes
+ News Crawler and Report Generation
  + Automated the process of filtering news related to the team's products

## Details

### Python Crawler Optimization

+ Optimized a Python crawler that initially relied entirely on Selenium, resulting in slow performance and frequent failures (over 50% error rate) without any error handling or notifications
+ Refactored parts of the crawler using Scrapy to improve speed and implemented an alerting system
+ Enhanced data collection methods and timing by incorporating server maintenance information and server-provided data
+ Reduced collection time by over 80%, from 3 hours to under 30 minutes

### Automation of Manual Data Entry

+ Automated the manual entry of version information files, which was a repetitive task prone to errors due to its high volume
+ Decreased the time required for this task from over an hour to less than 10 minutes, significantly improving efficiency and requiring only a final review

### News Crawler and Report Generation

+ Managed a news crawler that collected 100-200 news articles daily
+ Automated the process of filtering news related to the team's products by:
  + Collecting frequently used keywords from the titles of previously accumulated product-related news (updated periodically using a script)
  + Generating reports based on these keywords, eliminating the need for manual separation of relevant news
