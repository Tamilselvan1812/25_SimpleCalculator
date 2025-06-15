
    function appendValue(val) {
      let current = document.getElementById('display').value;     
      document.getElementById('display').value = current + val;

    }

    function clearDisplay() {
      document.getElementById('display').value = '';
    }

    function calculate() {
      try {                                                                  //The try statement defines a code block to run (to try).
        let result = eval(document.getElementById('display').value);        
        document.getElementById('display').value = result;
      } catch {                                                              //The catch statement defines a code block to handle any error.
        document.getElementById('display').value = 'Error';
      }
    }