# NeedromADS

NeedromADS is an easy solution to download ROM, without having to disable Adblocker.

# Installation

If you have installed [Tampermonkey](https://www.tampermonkey.net/) - you can add script by clicking [here](scripts/raw/main/main.user.js)!

# How it works

We're just checking to see if there are requests that scripts can send us that can check if we have an advertising ID. However, on edge, mozilla (Tor edition) browsers, the check is incorrect, and even if you do not have an Adblocker, you receive a warning that you cannot download resources, since you have Adblocker enabled. the script inside itself changes the content along with a link to the message "Adblocker detected, please disable it".