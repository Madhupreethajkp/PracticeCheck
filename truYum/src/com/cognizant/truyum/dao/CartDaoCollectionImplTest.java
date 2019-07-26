package com.cognizant.truyum.dao;

public class CartDaoCollectionImplTest {

	public static void main(String[] args) {
		testAddCartItem();
		testRemoveCartItem();

	}
	static void testAddCartItem() {
		CartDao cartDao=new CartDaoCollectionImpl();
		cartDao.addCartItem(1, 1001);
		try {
			System.out.println(cartDao.getAllCartItems(1));
			
		}
		catch(CartEmptyException e) {
			e.printStackTrace();
		}
	}
	static void testRemoveCartItem() {
		CartDao cartDao=new CartDaoCollectionImpl();
		cartDao.removeCartItem(1, 1001);
		try {
			cartDao.getAllCartItems(1);
		}
		catch(CartEmptyException e) {
			e.printStackTrace();
		}
		
	}
	

}
