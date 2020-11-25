from selenium import webdriver
import time
chromedriver = "C:/Users/Atharva Patil/Downloads/chromedriver_win32/chromedriver.exe"
driver = webdriver.Chrome(chromedriver)
driver.set_window_size(1200,700)
driver.get("http://localhost:4200")

user = ['abc','egf','abd','atharva','pranav','pandit','kalvankar']
key = ['12345','11111','696969','69420','420420','66666']

driver.find_element_by_xpath("/html/body/app-root/div/nav/a[3]").click()

for i in range(0,6):
    username = driver.find_element_by_xpath("/html/body/app-root/app-login/div/form/div[1]/input")
    username.clear()
    username.send_keys(user[i])

    password = driver.find_element_by_xpath("/html/body/app-root/app-login/div/form/div[2]/input")
    password.clear()
    password.send_keys(key[i])

    signin = driver.find_element_by_xpath("/html/body/app-root/app-login/div/form/button")
    signin.click()
    exists = driver.find_element_by_xpath("/html/body/app-root/app-login/div/form/div[1]/small[2]")
    text1 = exists.text
    with open('output.txt' , 'a') as file :
        file.write(text1)
        file.write('\n')


print('Output is given in output.txt')
# driver.find_element_by_xpath("/html/body/app-root/div/nav/a[3]").click()
