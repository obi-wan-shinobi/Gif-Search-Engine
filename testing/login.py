from selenium import webdriver
import time
chromedriver = "C:/Users/Atharva Patil/Downloads/chromedriver_win32/chromedriver.exe"
driver = webdriver.Chrome(chromedriver)
driver.set_window_size(1200,700)
driver.get("http://localhost:4200")

user = ['abc','egf','shreyask1','atharva','pranav','pandit','shreyask','shreyas']
key = ['12345','11111','password2','69420','420420','66666','password1',' ']
text1 = 'User does not exist. Please sign up'
text2 = 'Success'
text3 = 'Incorrect Password'
text4 = 'Please enter a username'
text5 = 'Please enter a password'
open('outputs/output.txt', 'w').close()
driver.find_element_by_xpath("/html/body/app-root/div/nav/a[3]").click()

for i in range(0,8):
    driver.refresh()
    username = driver.find_element_by_xpath("/html/body/app-root/app-login/div/form/div[1]/input")
    username.clear()
    username.send_keys(user[i])

    password = driver.find_element_by_xpath("/html/body/app-root/app-login/div/form/div[2]/input")
    password.clear()
    password.send_keys(key[i])

    signin = driver.find_element_by_xpath("/html/body/app-root/app-login/div/form/button")
    signin.click()
    exists = driver.page_source

    with open('outputs/output.txt','a') as file:
        flag = 0
        if text2 in exists :
            file.write(user[i]+':'+' '+text2)
            file.write('\n')
            flag = 1
        if text3 in exists and flag == 0 :
            file.write(user[i]+':'+' '+text3)
            file.write('\n')
            flag = 1
        if text1 in exists and flag == 0:
            file.write(user[i]+':'+' '+text1)
            file.write('\n')





print('Output is given in output.txt')
time.sleep(5)
driver.quit()
