
data = [];

const fs = require('fs')
  
fs.readFile('data.txt', (err, string_data) => {
    if (err) throw err;
  
    // Split data by Segment
    data_array = string_data.toString().split('||');

    // Create Segment Object List
    for (let index = 0; index < data_array.length; index++) {

        // Read each segment
        const element = data_array[index];

        // Split segment | field name | field
        seg_array = element.split('|');
        let new_segment = null;
        for (let index = 0; index < seg_array.length; index++) {
            const element = seg_array[index];

            // Segment
            if(element.match('[A-Z]{3}') && element.length == 3 ){
                new_segment = new Segment(element);
                data.push(new_segment);
            }

            // Field
            else{
                let name = element.substring(0,3);
                let value = element.substring(3);
                // Check if fields are valid
                if(name.match('[A-Z]{3}')){
                    new_segment.add_field(name,value);
                }
                else{
                    console.log("error reading");
                }
            }


        }
    }
    

    data.forEach(element => {
        console.log(element.seg_name);
        element.field.forEach(field => {
            console.log(this.name);
        });
    });
})


function search(){
    var input = document.getElementById('input');
    var results = [];


}



class Segment{


    constructor(seg_name){

        // Segment
        this.seg_name = seg_name;

        // List
        this.field = [];
    }

    add_field(name,value){
        var add_field = new Field(name,value);
        this.field.push(add_field);
    }

    get_seg_by_name(seg_name){
        for (let index = 0; index < this.field.length; index++) {
            const element = this.field[index];
            if(element.seg_name == seg_name){
                return element;
            }
            else{
                return null;
            }
        }
    }
    get_seg_by_fieldname(fieldname){
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }
    }
    get_seg_by_field(field){
        
    }
}


class Field{


    constructor(name,value){

        this.name = name;
        this.value = value;
    }

}