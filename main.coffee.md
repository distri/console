Main
====

This is a hybrid console, intended to be used with the developer console in the
browser as well, all results will be displayed in dev console.

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

    send = (data) ->
      opener?.postMessage data, "*"
