### Notify

---

I've been setting up CI/CD for a few of my side projects via Github Actions and with this I really don't want to have to be checking and re-checking to know the status of the build. 'Is it done ?', nahh, its not, head off to do something else, return to check, 'Is it done ?', nahh, it's still pushing to the container registry. Head off again to do something else and return, 'Oh crap it failed' and I've been refreshing the application waiting to see the updated changes. Ideally, I just want the build to be triggered and bounce to do something else while getting periodic notifications about the build status.

I had a look at the current existing options for notifications and for some reason or another, none of them really did exactly what I wanted. Either they only sent out notifications when the build was completed/failed or did not offer the specific notification channel I wanted, in this case, email.

As a self-professed lazy engineer I figured I would just build a custom solution to fit my needs. I am building out this service so as to be able to trigger notifications at different points in the build pipeline so that I can be kept apprised of the current status of the build. Basically when

- the build of the image begins
- the build of the image is completed
- the built image is successfully pushed to the container registry
- the container for the application is successfully recreated based on the just built image
- if for any reason, the build fails

This service can also serve other purposes as well. I can see situations in the future in which I may need to trigger some other sort of notification/reminder remotely.
