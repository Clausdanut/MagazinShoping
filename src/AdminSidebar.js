import React from "react";
import './design.css';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import { auth } from "./firebase";
import Admin from "./Admin";

export default function AdminSidebar() {
    return (
        <div>
    <link
      rel="stylesheet"
      type="text/css"
      
    />
    <link
            rel="stylesheet"
      type="text/css"
    />
    <link rel="stylesheet" type="text/css" href="./design.css" />


       
    <div class="row">
        <div class="col-2">
            <div class="sidebar-wrapper">
                <nav id="sidebar">
                    <ul class="list-unstyled components">
                    <li>
                        <a href="#"><i class="fas fa-tachometer-alt"></i> Dashboard</a>
                    </li>
            
                    <li>
                        <Link to="/admin-product" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
                            class="fab fa-product-hunt"></i> Product</Link>
                        <ul class="collapse list-unstyled" id="productSubmenu">
                            <li>
                            <a href="#"><i class="fas fa-clipboard-list"></i> All</a>
                            </li>
            
                            <li>
                            <a href="#"><i class="fas fa-plus"></i> Create</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#"><i class="fas fa-shopping-basket"></i> Orders</a>
                    </li>

                    <li>
                        <a href="#"><i class="fas fa-users"></i> Users</a>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-users"></i> Contact</a>
                    </li>
            
                </ul>
                </nav>
            </div>
        </div>
    </div>
     

    </div>
    );
}


       