import React, { useState } from "react";
export default function Complete() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [roll, setRoll] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [college, setCollege] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [blood, setBlood] = useState('');
    const [father, setFather] = useState('');
    const [mother, setMother] = useState('');
    const [guardian, setGuardian] = useState('');
    const [guardian_phone, setGuardian_phone] = useState('');
    const [guardian_address, setGuardian_address] = useState('');
    const [guardian_city, setGuardian_city] = useState('');
    const [guardian_state, setGuardian_state] = useState('');
    const [guardian_pincode, setGuardian_pincode] = useState('');
    const [guardian_country, setGuardian_country] = useState('');
    const [guardian_email, setGuardian_email] = useState('');
    const [guardian_occupation, setGuardian_occupation] = useState('');
    const [guardian_income, setGuardian_income] = useState('');
    const [guardian_relation, setGuardian_relation] = useState('');
    const [guardian_occupation_address, setGuardian_occupation_address] = useState('');
    const [guardian_occupation_city, setGuardian_occupation_city] = useState('');
    const [guardian_occupation_state, setGuardian_occupation_state] = useState('');
    const [guardian_occupation_pincode, setGuardian_occupation_pincode] = useState('');
    const [guardian_occupation_country, setGuardian_occupation_country] = useState('');
    const [guardian_occupation_phone, setGuardian_occupation_phone] = useState('');
    const [guardian_occupation_email, setGuardian_occupation_email] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server or perform validation
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Roll:', roll);
        console.log('Branch:', branch);
        console.log('Year:', year);
        console.log('College:', college);
        console.log('Phone:', phone);
        console.log('Address:', address);
        console.log('City:', city);
        console.log('State:', state);
        console.log('Pincode:', pincode);
        console.log('Country:', country);
        console.log('Dob:', dob);
        console.log('Gender:', gender);
        console.log('Blood:', blood);
        console.log('Father:', father);
        console.log('Mother:', mother);
        console.log('Guardian:', guardian);

        console.log('Guardian_phone:', guardian_phone);
        console.log('Guardian_address:', guardian_address);
        console.log('Guardian_city:', guardian_city);
        console.log('Guardian_state:', guardian_state);
        console.log('Guardian_pincode:', guardian_pincode);
        console.log('Guardian_country:', guardian_country);
        console.log('Guardian_email:', guardian_email);
        console.log('Guardian_occupation:', guardian_occupation);
        console.log('Guardian_income:', guardian_income);
        console.log('Guardian_relation:', guardian_relation);
        console.log('Guardian_occupation_address:', guardian_occupation_address);
        console.log('Guardian_occupation_city:', guardian_occupation_city);

        console.log('Guardian_occupation_state:', guardian_occupation_state);
        console.log('Guardian_occupation_pincode:', guardian_occupation_pincode);
        console.log('Guardian_occupation_country:', guardian_occupation_country);
        console.log('Guardian_occupation_phone:', guardian_occupation_phone);
        console.log('Guardian_occupation_email:', guardian_occupation_email);
    };
    return (
        <>
          <center><h2>Complete Your Profile</h2></center>  
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Roll:
                    <input
                        type="text"
                        value={roll}
                        onChange={(e) => setRoll(e.target.value)}
                    />

                </label>
                <br />
                <label>
                    Branch:
                    <input
                        type="text"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Year:
                    <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    College:
                    <input
                        type="text"
                        value={college}

                        onChange={(e) => setCollege(e.target.value)}

                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input

                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Address:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}    
                    />  
                </label>
                <br />
                <label>
                    City:
                    <input  
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </label>
                <br />
                <label>Sign Up      
                    State:
                    <input  
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />  
                </label>
                <br />

                <label>
                    Pincode:
                    <input  
                        type="text"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Country:
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </label>
                <br />
                </form>
                
            </>
    );


}