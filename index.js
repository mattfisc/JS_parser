

data = [];

const fs = require('fs')
  
fs.readFile('data.txt', (err, string_data) => {
    if (err) throw err;
  
    // Split data by Segment
    data_array = string_data.toString().split('||');

    // Create Segment Object List
    for (let index = 0; index < data_array.length; index++) {
        const element = data_array[index];
        seg_array = element.split('|');

        for (let index = 0; index < seg_array.length; index++) {
            const element = seg_array[index];
            
            let re = '/[A-Z]*{3}/g'
            // if segment 3 letters
            if(element.match(re) && element.length == 3)
                console.log(element);
        }
        
        
    }
    //console.log(data.split('||'));
    //console.log(data.toString());
})

