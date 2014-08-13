Main
====

This is a hybrid console, intended to be used with the developer console in the
browser as well, all results will be displayed in dev console.

    require "appcache"

    input = document.createElement "textarea"
    input.onkeydown = (e) ->
      if e.keyCode is 13 and e.shiftKey
        e.preventDefault()

        text = input.value

        try
          code = CoffeeScript.compile text, bare: true

          send
            code: code

          input.value = ""

        catch e
          console.error e

    document.body.appendChild input

    styleNode = document.createElement("style")
    styleNode.innerHTML = require "./style"

    document.head.appendChild styleNode

TODO: Use Postmaster

Send messages to parent window or opener window.

    send = (data) ->
      if parent == window
        opener?.postMessage data, "*"
      else
        parent.postMessage data, "*"

Receive errors and results from parent or opener.

    eventProcessor = (event) ->
      if (event.source is parent) or (event.source is opener)
        if result = event.data?.result
          console.log result
        else if error = event.data?.error
          console.error error

    addEventListener "message", eventProcessor, false
