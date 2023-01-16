
export default function SignUp() {
  
    return (
        <div>
            <h1>Sign up</h1>
            <form>
                <label htmlFor='name'>Name*</label>
                <input type='text' placeholder='Enter your name'></input>
                <br />
                <label htmlFor='email'>Email*:</label>
                <input type='email' name="email" placeholder='Enter your email'></input>
                <br />
                <label htmlFor='password'>Password:</label>
                <input name="password" type='password' placeholder='Create a password'></input>
                <br />

                <br />
                <button>Create account</button>
            </form>
        </div>
    )
}