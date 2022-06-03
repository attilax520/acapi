
# python tlg.py
import pyautogui
import time
print(pyautogui.position())   # 当前鼠标 x， y坐标
pyautogui.moveTo(131, 1057  ) 
time.sleep(1)
pyautogui.click(131, 1057)
time.sleep(1)
pyautogui.click(889, 1000)    #active input txt
print("1111")
time.sleep(1)
pyautogui.write('test send\n')  # 用于输入文本，回车换行l
time.sleep(1)
pyautogui.write('https://zbm.news/1654255458_1/\n') 
pyautogui.write('https://zbm.news/1654250527_2/\n') 
pyautogui.write('https://zbm.news/1654250277_2/\n') 
pyautogui.write('https://www.google.com/search?q=telegrame+%E7%BE%A4%E7%BB%84%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF+api&oq=telegrame+%E7%BE%A4%E7%BB%84%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF+api&aqs=edge..69i57.19860j0j1&sourceid=chrome&ie=UTF-8\n')  # 用于输入文本，回车换行l


 