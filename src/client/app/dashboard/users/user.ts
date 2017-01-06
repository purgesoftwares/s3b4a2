export class User {
    constructor(
    	public id: number,
        public first_name : string, 
        public last_name: string,
        public id_document_number: string, 
        public address_id: number, 
        public dob: string, 
        public id_country_of_origin: string, 
        public identification_type_id: number, 
        public mobile_phone: string, 
        public home_phone:string,
        public work_phone: string,
        public fax: string, 
        public email: string,  
    ){}
}

