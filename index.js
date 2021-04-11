
data = [];

const fs = require('fs');
  
fs.readFile('data.txt', (err, string_data) => {
    if (err) throw err;
  
    // Split data by Segment
    data_array = string_data.toString().split('||');

    parse_data(data_array);
})

function parse_data(data_array){
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
                    var field = new Field(name,value);
                    new_segment.add_field(field);
                }
                else{
                    console.log("error reading");
                }
            }
        }
    }

    //tester
    // data.forEach(element => {
    //     console.log("Segment:\n\t",element.seg_name);
    //     element.field.forEach(field => {
    //         console.log("Field:\n\tname:",field.name);
    //         console.log("\tvalue",field.value);
    //     });
    // });
}

function search(){
    var input = document.getElementById('input').value;

    var result = [];
    result.push( search_by_segment(input) );
    result.push( search_by_name(input) );
    result.push( search_by_value(input) );

}

function search_by_segment(input){
    var result = [];

    data.forEach(element => {
        
        if(element.localeCompare(input))
            result.push(element);

        element.field.forEach(field => {
            if(field.name.localeCompare(input))
                result.push(element);
            if(field.value.localeCompare(input))
            result.push(element);
        });
    });

    return result;
}

// function search_by_name(input){
//     var result = [];

//     return result;
// }
// function search_by_value(input){
//     var result = [];

//     return result;
// }



class Segment{
/**
 * Segment Class
 * @param seg_name String segments name to refer to the field list
 * @param field Array String that lists all fields under the Segment
 * 
 */

    constructor(seg_name){
        // Segment
        this.seg_name = seg_name;

        // List
        this.field = [];
    }

    add_field(field){
        this.field.push(field);
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
/**
 * Field Class
 * @param name String a three upper case Letters related to value
 * @param value String is the value field related to name
 */

    constructor(name,value){

        this.name = name;
        this.value = value;
    }

}