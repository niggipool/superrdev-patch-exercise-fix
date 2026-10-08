## Issues Found
- \# loading tasks are slow latency issues
- \# search is working only for the amount of pages the results are- if i serach fix and there are 2 pages worth of result and if i am on 3rd page it wont show - frontend
- \# filter status not working - frontend issue open api is workig
- \# serach is not smooth shows diff output at first then matching output
- \# frontend getting stuck on loading when backend not runing
- \# archive are also getting listed
- \# could add archive and timestamp feature to make it look cleaner
- \# sql query in taskRepo where AND was getting excute before OR which was resulting in wrong status filtering and archived task appearing
- \# invalid response on api/?status=hello

## SUMMARY

I fixed all the issues listed above. I fixed the reported frontend and backend issues across task loading, search, filtering, pagination, archiving, and API validation. Removed all the latency existing at backend by removing the thread.sleep from backend while keeping all the functionality. I changed the pagesize architecture in which the pagesize was getting calculated after fetching all the data. when large datasets it bottlenecks the backend. so only required pagesize data gets fetched. My highest priority was to remove the latency. I also verified the project by making a fresh clone everything works. I have explained all the problems in the handwritten notes in an elobarative asked way.

## What I Chose Not to Change

Noting as such but yeah the project uses old version of dependencies even tho new versions were available. I could have made multiple ui-ux changes and instead of old css i would have used tailwind coz it is more effecint and responsive. Existing UI is not a responive web it clips on smaller screen like phones.

## Biggest Remaining Risk

I dont see no Risk remaing or i could not find more only that pagesize was a huge risk for bottleneck but i change it in the end

## Tools/Ai

I used Chatgpt only to help me finded me find errors in backend and also helped me with the sql query it also helped me removing that pagesize issue in the end.

## Future Enhancements

- \# adding timestamps
- \# clickable taske whoch shows the desc
- \# archive button to show archived task
