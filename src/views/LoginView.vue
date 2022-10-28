<template>
    <div class="login">  
        <div class="login-container container-xxl" >
            <div class="container-card login-card">
                <div class="card">
                    <div class="login-card_logo">
                        <img src="images/fitmatch-logo.png" alt="Fitmatch Logo" class="fitmatch-logo">

                        <span class="fitmatch-text">
                            <p class="text" >FITMACTH</p>
                            <p class="sub-text">Gym management</p>
                        </span>
                    </div>                    
                    <div class="login-card_body">
                        <h5 class="login-form_title">Log in</h5>

                        <form class="login-form">
                            <input type="email" class="form-control form-control-lg border-0 mb-2" id="email" aria-describedby="Email" placeholder="Email" >

                            <input type="password" class="form-control form-control-lg border-0 mb-2" id="password"  placeholder="Password" >

                            <div class="mb-3 d-flex flex-direction-row justify-content-between">
                                <span class="show-password-check" >
                                    <input type="checkbox" class="form-check-input" id="showCheckup">
                                    <label class="form-check-label ms-1" for="showCheckup">Show password</label>
                                </span>

                                <a class="anchor-tag forgot-password">Forgot password?</a>
                            </div>
                            <router-link tag="button" type="submit" class="btn btn-primary btn-lg w-100 fw-semibold mt-4 " to="/">Log in</router-link>
                        </form>
                    </div>
                    <div class="login-card_footer">
                        <a class="anchor-tag" >Terms of use </a> | <a class="anchor-tag">Privacy Policy</a>
                    </div>
                </div>
            </div>
            <div class="container-card  login-fitness-image">
                <img src="images/girl-fitness-1.png" alt="Fitness Image">
                <div class="lading-plate"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "LoginView"
}
</script>
<style lang="scss">
    .login {
        height: 100%;
        width: 100%;
        background-image: linear-gradient(to right top, #ff5fa8, #e47ad6, #ba94f5, #89aaff, #5fbaff, #64beff, #6ac2ff, #70c6ff, #92c2ff, #b9bcff, #deb5ff, #ffadf3);
        text-align: center;
        
        & &-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100%;
            
            & .container-card {
                width: 50%;  
                height: 100%;              
            }
        }

        & &-card {
            padding: 40px;

            & .card {
                height: 100%;
                width: 100%;
                border-radius: 50px;
                background-color: rgb(255 255 255 / 70%);

                display: flex;
                flex-direction: column;
                // justify-content: space-between;
                padding: 50px;
            }

            &_logo {
                display: flex;
                flex-direction: row;
                align-items: center;
                align-self: center;

                width: 100%;
                justify-content: center;
                height: 30%;

                & .fitmatch-logo {
                    height: 50px;
                }

                & .fitmatch-text {
                    border-left:  1px solid var(--bs-gray-800);
                    padding-left: 10px;
                    margin-left: 10px;
                    color: var(--bs-gray-800);

                    & .text {
                        margin: 0;
                        font-size: 1.5em;
                        letter-spacing: 5px;
                        font-weight: 500;
                    }
                    & .sub-text {
                        margin: 0;
                        font-size: 1.2em;
                        font-weight: 500;
                    }
                }
            }

            &_body {
                height: 66%;

                .login-form {
                    &_title {
                        color: var(--bs-gray-800);
                        font-weight: 900;
                        font-size: 1.5em;
                        margin-bottom: 40px;
                    }

                    width: 80%;
                    margin: auto;
                }
            }
            &_footer {
                
            }

           
        }

        & &-fitness-image {
            position: relative;

            & img {
                height: 75%;
                width: auto;

                position: absolute;
                top: 50%;
                left: 50%;

                transform: translate(-50%, -50%);
                -webkit-transform: translate(-50%, -50%);
                -moz-transform: translate(-50%, -50%);
                -o-transform: translate(-50%, -50%);

                z-index: 5;
            }

            & .lading-plate {
              

                background-color: rgb(255 255 255 / 30%);
                width: 70%;
                height: 500px;
                border-radius: 28% 72% 72% 28% / 55% 69% 31% 45%;

                position: absolute;
                left: 50%;
                bottom: -15%;

                transform: scale(1,0.2) skew(350deg, 359deg) translate(-50%, 15%);
                -webkit-transform: scale(1,0.2) skew(350deg, 359deg) translate(-50%, 15%);
                -moz-transform: scale(1,0.2) skew(350deg, 359deg) translate(-50%, 15%);
                -o-transform: scale(1,0.2) skew(350deg, 359deg) translate(-50%, 15%);

                z-index: 1;
            }

        }
    }
</style>