package com.cognizant.truyum.dao;

import com.cognizant.truyum.model.MenuItem;
import com.cognizant.truyum.util.DateUtil;

public class MenuItemDaoCollectionImplTest {

	public static void main(String[] args) {
		
		testGetMenuItemListAdmin();
		testGetMenuItemListCustomer();
		testModifyMenuItem();

	}
	
	static void testGetMenuItemListAdmin() {
		System.out.println("Inside getMenuItemListAdmin");
		MenuItemDao menuItemDao=new MenuItemDaoCollectionImpl();
		for(MenuItem menuItem:menuItemDao.getMenuItemListAdmin())
		{  
			System.out.println(menuItem);
			
		}
	}
	static void testGetMenuItemListCustomer() {
		System.out.println("Inside getMenuItemListCustomer");
		MenuItemDao menuItemDao=new MenuItemDaoCollectionImpl();
		for(MenuItem menuItem:menuItemDao.getMenuItemListCustomer())
		{  
			System.out.println(menuItem);
			
		}
		
		
	}
	 static void testModifyMenuItem() {
		 MenuItem menuitem1=new MenuItem(1001,"Pasta",99.00f,true,DateUtil.convertToDate("15/03/2017"),"Snacks",true);
			MenuItemDao menuItemDao=new MenuItemDaoCollectionImpl();
			menuItemDao.modifyMenuItem(menuitem1);
			System.out.println("Modified product \n"+menuItemDao.getMenuItem(menuitem1.getId()));
			System.out.println("All modified Items");
			for(MenuItem menuItem:menuItemDao.getMenuItemListAdmin()) {
				System.out.println(menuItem);
			}
		
		
	}

}
