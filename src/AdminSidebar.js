import React from "react";
import './design.css';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import { auth } from "./firebase";
import Admin from "./Admin";
import Create from "./Create";

export default function AdminSidebar() {
    return (
        <div>
    <link
      rel="stylesheet"
      type="text/css"
      
    />

    <link rel="stylesheet" type="text/css" href="./design.css" />


       
    <div class="sidebar-col">
        <div class="col-2">
            <div class="sidebar-wrapper">
                <nav id="sidebar">
                    <ul class="list-unstyled components">
                    <li> 
                        <Link to="/home" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
                            class="fab fa-product-hunt"></i> Home</Link>
            
                    </li>
            
                    <li>
                        <Link to="/admin-product" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
                            class="fab fa-product-hunt"></i> Product</Link>
                        <ul class="collapse list-unstyled" id="productSubmenu">
                            <li>
                            <a href="/admin-product"><i class="fas fa-clipboard-list"></i> All</a>
                            </li>
            
                            <li>
                            <Link to="/create" data-toggle="collapse" aria-expanded="" class=""><i
                            class=""></i>Create</Link>
                            </li>
                        </ul>
                    </li>

                   
                    <li>
                    <Link to="/admin-contact" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
                            class="fab fa-product-hunt"></i> Contact</Link>
                            
                    </li>
            
                </ul>
                </nav>
            </div>
        </div>
    </div>
     

    </div>
    );
}


       