
class Segment{


    constructor(seg){

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