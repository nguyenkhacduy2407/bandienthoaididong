import React from "react";
import { Link } from "react-router-dom";

function AdminOrderMenu(props) {
  return (
    <div className="order-menu">
      <Link to="/admin/order">Tất Cả Đặt Hàng</Link>
    </div>
  );
}

export default AdminOrderMenu;
