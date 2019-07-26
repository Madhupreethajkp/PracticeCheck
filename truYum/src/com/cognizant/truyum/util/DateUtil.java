package com.cognizant.truyum.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
	public static Date convertToDate(String input) {
		try {
			SimpleDateFormat format=new SimpleDateFormat("dd/MM/yyyy");
			Date dateOfExpiry=format.parse(input);
			return dateOfExpiry;
		}
		catch(ParseException e) {
			e.printStackTrace();
		}
		return null;
	}

}
