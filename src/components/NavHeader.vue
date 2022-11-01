<template>
   <nav class="nav-header shadow" >
        <div class="container">
            
            <div class="left-container">
                <a class="navbar-brand" href="#">
                    <img src="images/fitmatch-logo.png" alt="Fitmatch">
                </a>

                <div class="input-group suffix search-input">
                    <input type="text" class="form-control border-0 bg-grey-200" placeholder="Search" aria-label="Search" aria-describedby="search-addon">
                    <span class="input-group-text addon-suffix border-0 bg-grey-200" id="search-addon"><i class="bi bi-search"></i></span>
                </div>
            </div>

           <div class="right-container">
                <router-link to="/athletes" class="nav-link" >{{$t('athletes')}}</router-link>
                <router-link to="/courses" class="nav-link" >{{$t('courses')}}</router-link>
                <router-link to="/exercises" class="nav-link" >{{$t('exercises')}}</router-link>

                <div class="dropdown nav-link position-relative">

                    <a id="profile" class="btn-icon dropdown-toggle no-caret" role="button" aria-expanded="false"  @click="toggleProfileMenu()" >
                        <i class="bi bi-person"></i>
                    </a>

                    <ul id="profileMenu" class="dropdown-menu language-menu">
                        <li>
                            <a class="dropdown-item" @click="setLanguage('it')" >
                                <span class="fw-semibold" >
                                    <img src="images/italy.png" alt="IT Flag" class="flag" >
                                    Italian <span class="text-secondary text-lowercase fs-small" >(it)</span> 
                                </span>
                                <span><i v-if="$i18n.locale == 'it'"  class="bi bi-check-lg app-color "></i></span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item"  @click="setLanguage('en')">
                                <span class="fw-semibold" >
                                    <img src="images/us.png" alt="IT Flag" class="flag" >
                                    English <span class="text-secondary text-lowercase fs-small" >(en)</span> 
                                </span>
                                <span><i  v-if="$i18n.locale == 'en'" class="bi bi-check-lg app-color "></i></span>
                            </a>
                        </li>
                        <hr class="my-1"/>
                        <li>
                            <router-link to="/login" class="dropdown-item fw-semibold" >
                                <span><i class="bi bi-box-arrow-right me-2"></i>{{$t('logout')}}</span>
                            </router-link>
                        </li>
                    </ul>
    
                </div>

           </div>

        </div>
    </nav>
</template>
<script>
import { Dropdown } from 'bootstrap';
import * as $ from 'jquery';

export default {
    name: 'NavHeader',
    data() {
        return {
            dropdownProfileMenuRef: null
        }
    },
    methods: {
        setLanguage(lang) {
            this.$i18n.locale = lang
        },
        toggleProfileMenu() {
            this.dropdownProfileMenuRef.toggle();
            $('#profile').toggleClass('highlight')
        }
    },
    mounted() {
        this.dropdownProfileMenuRef = new Dropdown('#profileMenu');
    }
}
</script>
<style lang="scss">
    .nav-header {
        height: inherit;
        padding: 0;
        background-color: var(--bs-white);

        & .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            widows: 100%;

            & .left-container, & .right-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 50%;
            }

            & .left-container {
                justify-content: flex-start;
            }
            & .right-container {
                justify-content: flex-end;
            }

            & .navbar-brand  {
                & img {
                    height: 30px
                }
            }

            & .search-input {
                width: 50%;
                margin-left: 20%;
            }

            & .nav-link {
                text-transform: capitalize;
                color: var(--bs-grey-800);
                font-weight: 400;
                cursor: pointer;

                transition: all 300ms ease-in;
                -webkit-transition: all 300ms ease-in;
                -moz-transition: all 300ms ease-in;
                -o-transition: all 300ms ease-in;

                &:not(:last-child) {
                    margin-right: 10%;
                }

                &:hover , &.router-link-active, .highlight {
                    color: var(--app-color-primary);

                }
                &.router-link-active, .highlight  {
                    font-weight: 700;

                }

                & .dropdown-menu {
                    transition: all 300ms ease-in;
                     -webkit-transition: all 300ms ease-in;
                    -moz-transition: all 300ms ease-in;
                    -o-transition: all 300ms ease-in;
                    font-size: .85em;

                    &.show {
                        transform: translate(20px, 40px) !important;
                        left: -146px !important;
                    }
                    
                    &::before {
                        content: "";
                        border-bottom: 11px solid #fff;
                        border-right: 10px solid transparent;
                        border-left: 10px solid transparent;
                        position: absolute;
                        top: -10px;
                        right: 16px;
                        z-index: 10;
                    }

                    &:after {
                        content: "";
                        border-bottom: 12px solid #ccc;
                        border-right: 12px solid transparent;
                        border-left: 12px solid transparent;
                        position: absolute;
                        top: -12px;
                        right: 14px;
                        z-index: 9;
                    }
                }

                & .language-menu {

                    & .dropdown-item {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        & .flag {
                            height: 1em;
                        }
                    }
                }
            }
        }
    }
</style>