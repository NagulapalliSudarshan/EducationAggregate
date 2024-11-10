export const signUpFormControls = [
    {
        name : 'userName',
        label : 'Username',
        placeholder : 'Enter the username',
        type : 'text',
        componentType : 'input'
    },
    {
        name : 'userEmail',
        label : 'Email',
        placeholder : 'Enter the email',
        type : 'email',
        componentType : 'input'
    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter the password',
        type : 'password',
        componentType : 'input'
    },
    {
        name: 'userCourse',
        label: 'Course',
        placeholder: 'Select your course',
        componentType: 'radio-group',
        options: [
            { value: 'cs', label: 'Computer Science' },
            { value: 'aiml', label: 'AI & ML' },
            { value: 'data-science', label: 'Data Science' },
            { value: 'it', label: 'Information Technology' },
            { value: 'electronics', label: 'Electronics Engineering' },
        ],
    }
]

export const signInFormControls = [
    {
        name : 'userEmail',
        label : 'Email',
        placeholder : 'Enter the email',
        type : 'email',
        componentType : 'input'
    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter the password',
        type : 'password',
        componentType : 'input'
    }
]

export const initialSignInFormData ={
    userEmail : "",
    password : "",
}

export const initialSignUpFormData ={
    userName : "",
    userEmail : "",
    password : "",
    userCourse : ""
}