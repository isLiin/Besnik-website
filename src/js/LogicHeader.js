import $ from "jquery";

function linkHeader(element) {
  console.log(element.target);
}

const handerLogicButton = {
  signUp: () => {
    $(".btn-SignIn").addClass("btn-active");
    $(".btn-SignUp").removeClass("btn-active");
    // Open sign up
    handleLogicForm("SignIn");
  },
  register: () => {
    $(".btn-SignIn").removeClass("btn-active");
    $(".btn-SignUp").addClass("btn-active");
    // Open register
    handleLogicForm("SignUp");
  },
};

// Create form
const handleLogicForm = (type) =>{
    const parent = document.getElementById('popup');
    
    if (type === 'SignIn') {
        parent.style.display = 'block'
        parent.innerHTML = null;
        parent.innerHTML = `
            <form id='SignIn' class='disFlex-center' method='GET' action='#'>
            <button class='btn-close'> X </button>
            <h1>Sign In</h1>
                <div class = 'group-item'>
                    <input type='text' placeholder = 'Your Account' checked/>
                    <input type='password' placeholder = 'Your Password' checked/>
                </div>
                <input value= 'Sign In' type= 'submit'/>
            </form>
        `;
    } else if (type === 'SignUp'){
        parent.style.display = 'block'
        parent.innerHTML = null;
        parent.innerHTML = `
            <form id='SignUp' class='disFlex-center' action='#'>
            <button class='btn-close'> X </button>
            <h1>Sign Up</h1>
                <div class = 'group-item'>
                    <input type='text' placeholder = 'Your Account' checked/>
                    <input type='password' placeholder = 'Your Password' checked/>
                    <input type='password' placeholder = 'Your Re-password' checked/>
                    <input type='text' placeholder = 'Your Email@gmail.com'/>
                    <span class='disFlex'>
                        <input type='checkbox' id='formCheck_1'>
                        <label for='formCheck_1'>Hello ! Checked to me.</label>
                    </span>
                </div>
                <input value= 'Sign Up' type= 'button'/>
            </form>
        `;
    } else{
        parent.style.display = 'none'
    }    

    ( $('.btn-close').on('click', handleLogicForm) )
}

// Public action
export const ActHeader = {
  form: handleLogicForm,
  link: linkHeader,
  button: handerLogicButton,
};
