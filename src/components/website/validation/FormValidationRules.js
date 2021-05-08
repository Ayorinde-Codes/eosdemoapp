export default function validate(values) {
    let errors = {};
    
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if(!values.fullName){
      
      errors.fullName = "fullName is required";
    }
    if(!values.middlename){
        
        errors.middlename = "middlename is required";
      }

      if(!values.lastname){
        
        errors.lastname = "lastname is required";
      }

      if(!values.phone){
        
        errors.phone = "phone is required";
      }

      if(!values.address){
        
        errors.address = "address is required";
      }

      if(!values.city){
        
        errors.city = "city is required";
      }

      if(!values.lasgidiId){
        
        errors.lasgidiId = "lasgidi Id is required";
      }
          
      if(!values.lga){
        
        errors.lga = "lga is required";
      }        
      if(!values.description){
        
        errors.description = "description is required";
      }        
      
      if(!values.pinCode){
        
        errors.pinCode = "pinCode is required";
      }     
      if(!values.phoneVaccination){
        
        errors.phoneVaccination = "phoneVaccination is required";
      }      
      if(!values.organizationNameCovidVaccination){
        
        errors.organizationNameCovidVaccination = "Covid Vaccination organization name is required";
      }      
      if(!values.startingDestination){
        
        errors.startingDestination = "starting Destination is required";
      }

      if(!values.endingDestination){
        
        errors.endingDestination = "ending Destination is required";
      }


    return errors;
  };
  

