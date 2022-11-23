# How it works and How to do it

This project does not require any additional packages tools or tech. Its __Free__, __Easy__, and __Quick__. 

Start by selecting a project you want to host over `CDN`
> :information_source: You can also use the raw github file link but this method is more universal and standardized.

Now initialize a new __git__ repository, in the mean time create a new 
```bash
git init
```
repository in __Github__. Now link your local repository to the remote repository.

```bash
git remote add origin [repo_url]
```
Now do your thing then `add` :arrow_right: `commit` :arrow_right: `push` :arrow_right: `done`

```bash
git add [file_name]
git commit -m [message]
git push origin [branch_name]
```
now you can follow the github workflow or just push everything to the main repository

## Where's the code?
After the code is in __GitHub__ you can use this great feature provided by __jsdelivr__ to host your code over CDN. 

Take note of the file you want to access and the branch name, and form a url in following format
  
```curl
https://cdn.jsdelivr.net/gh/[username]/[repo_name]/[branch_name]/[file_name]
```
> :information_source: You can also use the `@` symbol to specify a version number or commit hash or use `latest` to get the latest version of the file. Also you can add `.min` to the end of your file name and __jsdelivr__ will minify the file for you

Try it out yourself, I'm still learning so if you have any suggestions or improvements please let me know.
