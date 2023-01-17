
export default function SignUp() {
  
    return (
        <div>
            <h1>Sign up</h1>
            <form>
                <label htmlFor='name'>Name*</label>
                <br/>
                <input type='text' placeholder='Enter your name'></input>
                <br />
                <label htmlFor='email'>Email*:</label>
                <br/>
                <input type='email' name="email" placeholder='Enter your email'></input>
                <br />
                <label htmlFor='password'>Password:</label>
                <br/>
                <input name="password" type='password' placeholder='Create a password'></input>
                <br />

                <br />
                <button>Create account</button>
            </form>
        </div>
    )
}