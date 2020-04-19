# tailwindplayground
some tailwind experiments, layouts, components - WIP

Compiling my codepen stuff in a repo

For easy serving
npm -v

Install browser-sync
npm install -g browser-sync

Add stuff to shell (code > VSCode or your preferred editor)
code ~/.bashrc

in ~/.bashrc
export LOCAL_IP=`ipconfig getifaddr en0`
alias serve="browser-sync start -s -f . --no-notify --host $LOCAL_IP --port 9000"

CD in your project 
serve
