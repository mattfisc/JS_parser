<<<<<<< Updated upstream
var file = "";
var data = [];


function load_file(){
    // use the Fetch API & ES6
    fetch('data.txt')
        .then(response => response.text())
        .then(file => {
        parse_data(file);
    });


}






function parse_data(s){
    s = s.replace(/(\r\n|\n|\r)/gm, "");
    // Split data by Segment
    data_array = s.split('||');

    debugger
 
    // Create Segment Object List
    for (let index = 0; index < data_array.length; index++) {

        // Read each segment
        let element = data_array[index];

        // terminate if empty
        if(element === "")
            break;
        // Split segment | field name | field
        seg_array = element.split('|');
        let new_segment = null;
        for (let index = 0; index < seg_array.length; index++) {
            const ele = seg_array[index];

            // Segment
            if(ele.match('[A-Z]{3}') && ele.length == 3){
                new_segment = new Segment(ele);
                data.push(new_segment);
            }

            // Field
            else{
                let name = ele.substring(0,3);
                let value = ele.substring(3);
                // Check if fields are valid
                if(name.match('[A-Z]{3}') ){
                    var field = new Field(name,value);
                    if(field !== null){
                        new_segment.add_field(field);
                    }
                }
                else{
                    console.log("error reading ele ", ele, " element ",element);
                }
            }
        }
    }

}


function search(){
    var input = document.getElementById('input').value;
    var result = [];

    for (let index = 0; index < data.length; index++) {

        const segment = data[index];

        if(segment.seg_name === input)
        result.push( segment);

        for (let i = 0; i < segment.field.length; i++) {
            const field = segment.field[i];
            if(field.name === input)
                result.push(segment);                
            if(field.value === input)
                result.push(segment);              
        }
    }

    // clear old results
    var table = document.getElementById("result");
    table.innerHTML = "";

    // add new results
    if(result.length !== 0)
        display_result(result);
    else   
        display_no_result(input);

}


function display_no_result(input){
    var table = document.getElementById('result');
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.appendChild(document.createTextNode("NO RESULTS FOUND FOR " + input));
    row.appendChild(cell);
    table.appendChild(row);
}

function display_result(result){
    
    var table = document.getElementById('result');

    var row = document.getElementById('tr');

    // cylce all results
    for (let index = 0; index < result.length; index++) {
        var segment = result[index];

        var row = document.createElement('tr');

        // add string result
        var res = document.createElement('td');
        var text = document.createTextNode(result[index]);
        res.appendChild(text);

        row.appendChild(res);

        // Add to table
        table.appendChild(row);
    }
    
    
}



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
        if(field !== null)
            this.field.push(field);
        else
            return null;
    }

    toString(){
        return " Segment:\n\t" + this.seg_name +
        "\nField:\n\t" + this.field.toString();
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

    toString(){
        return "name: " + this.name + " value: " + this.value;
    }
}



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
}
)


