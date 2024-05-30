import React, { useEffect, useState, useCallback } from 'react'
import { useCart } from '../../context/CartContext'
import { useOrder } from '../../context/OrderContext'

export default function Amo_table({ check }) {
  const { order } = useOrder() // 取用cart這個hook
  console.log(check, '123')
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-9">
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <span>商品金額</span>
                <strong>${order.subtotal}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <span>優惠折扣</span>
                <strong>{order.coupondiscount}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <span>運費</span>
                <strong>{check.length > 0 ? order.fee : 0}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <span>總計</span>
                <strong>${check.length > 0 ? order.total : 0}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
