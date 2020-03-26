
package com.Opencart.excelutility;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class excel_data 
{
	
		public String name(int i) throws IOException
		{
			
			FileInputStream file= new FileInputStream("TestData\\excelsheet.xlsx");
			XSSFWorkbook workbook =new XSSFWorkbook(file);
			XSSFSheet sheet= workbook.getSheet("Sheet1");
			
				XSSFRow row= sheet.getRow(i);
				XSSFCell cell= row.getCell(0);
				String na= cell.getStringCellValue();
				
				return na;
		}	

		public String email(int i) throws IOException
		{
			
			FileInputStream file= new FileInputStream("TestData\\excelsheet.xlsx");
			XSSFWorkbook workbook =new XSSFWorkbook(file);
			XSSFSheet sheet= workbook.getSheet("Sheet1");
				
				XSSFRow row= sheet.getRow(i);
				XSSFCell cell1= row.getCell(1);
				String em= cell1.getStringCellValue();
				
				return em;
		}
		
				public String enquiry(int i) throws IOException
				{
					
					FileInputStream file= new FileInputStream("TestData\\excelsheet.xlsx");
					XSSFWorkbook workbook =new XSSFWorkbook(file);
					XSSFSheet sheet= workbook.getSheet("Sheet1");
						
						XSSFRow row= sheet.getRow(i);
						XSSFCell cell1= row.getCell(2);
						String en= cell1.getStringCellValue();
						
						return en;
				}
}
