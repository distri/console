(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "console\n=======\n\nAdd a CoffeeScript console to anything\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.0\"\nremoteDependencies: [\n  \"https://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js\"\n]\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "Main\n====\n\nThis is a hybrid console, intended to be used with the developer console in the\nbrowser as well, all results will be displayed in dev console.\n\n    input = document.createElement \"textarea\"\n    input.onkeydown = (e) ->\n      if e.keyCode is 13 and e.shiftKey\n        e.preventDefault()\n\n        text = input.value\n        \n        try\n          code = CoffeeScript.compile text, bare: true\n\n          send\n            code: code\n          \n          input.value = \"\"\n\n        catch e\n          console.error e\n\n    document.body.appendChild input\n\n    styleNode = document.createElement(\"style\")\n    styleNode.innerHTML = require \"./style\"\n    \n    document.head.appendChild styleNode\n\n    send = (data) ->\n      opener?.postMessage data, \"*\"\n",
      "type": "blob"
    },
    "style.styl": {
      "path": "style.styl",
      "mode": "100644",
      "content": "*\n  box-sizing: border-box\n\nhtml\n  height: 100%\n\nbody\n  height: 100%\n  margin: 0\n  overflow: hidden\n\ntextarea\n  width: 100%\n  height: 100%\n  background-color: black\n  color: #080\n  font: bold 16px consolas, 'Courier New', 'andale mono', 'lucida console', monospace\n",
      "type": "blob"
    }
  },
  "distribution": {
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\",\"remoteDependencies\":[\"https://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js\"]};",
      "type": "blob"
    },
    "main": {
      "path": "main",
      "content": "(function() {\n  var input, send, styleNode;\n\n  input = document.createElement(\"textarea\");\n\n  input.onkeydown = function(e) {\n    var code, text;\n    if (e.keyCode === 13 && e.shiftKey) {\n      e.preventDefault();\n      text = input.value;\n      try {\n        code = CoffeeScript.compile(text, {\n          bare: true\n        });\n        send({\n          code: code\n        });\n        return input.value = \"\";\n      } catch (_error) {\n        e = _error;\n        return console.error(e);\n      }\n    }\n  };\n\n  document.body.appendChild(input);\n\n  styleNode = document.createElement(\"style\");\n\n  styleNode.innerHTML = require(\"./style\");\n\n  document.head.appendChild(styleNode);\n\n  send = function(data) {\n    return typeof opener !== \"undefined\" && opener !== null ? opener.postMessage(data, \"*\") : void 0;\n  };\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "style": {
      "path": "style",
      "content": "module.exports = \"* {\\n  -ms-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  height: 100%;\\n}\\n\\nbody {\\n  height: 100%;\\n  margin: 0;\\n  overflow: hidden;\\n}\\n\\ntextarea {\\n  width: 100%;\\n  height: 100%;\\n  background-color: black;\\n  color: #080;\\n  font: bold 16px consolas, 'Courier New', 'andale mono', 'lucida console', monospace;\\n}\";",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.1.0",
  "entryPoint": "main",
  "remoteDependencies": [
    "https://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js"
  ],
  "repository": {
    "id": 15326247,
    "name": "console",
    "full_name": "distri/console",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/console",
    "description": "Add a CoffeeScript console to anything",
    "fork": false,
    "url": "https://api.github.com/repos/distri/console",
    "forks_url": "https://api.github.com/repos/distri/console/forks",
    "keys_url": "https://api.github.com/repos/distri/console/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/console/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/console/teams",
    "hooks_url": "https://api.github.com/repos/distri/console/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/console/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/console/events",
    "assignees_url": "https://api.github.com/repos/distri/console/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/console/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/console/tags",
    "blobs_url": "https://api.github.com/repos/distri/console/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/console/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/console/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/console/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/console/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/console/languages",
    "stargazers_url": "https://api.github.com/repos/distri/console/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/console/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/console/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/console/subscription",
    "commits_url": "https://api.github.com/repos/distri/console/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/console/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/console/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/console/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/console/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/console/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/console/merges",
    "archive_url": "https://api.github.com/repos/distri/console/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/console/downloads",
    "issues_url": "https://api.github.com/repos/distri/console/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/console/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/console/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/console/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/console/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/console/releases{/id}",
    "created_at": "2013-12-20T00:25:15Z",
    "updated_at": "2013-12-20T00:25:33Z",
    "pushed_at": "2013-12-20T00:25:15Z",
    "git_url": "git://github.com/distri/console.git",
    "ssh_url": "git@github.com:distri/console.git",
    "clone_url": "https://github.com/distri/console.git",
    "svn_url": "https://github.com/distri/console",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "master",
    "defaultBranch": "master"
  },
  "dependencies": {}
});