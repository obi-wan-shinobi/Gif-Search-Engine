from selenium import webdriver
import time
chromedriver = "C:/Users/Atharva Patil/Downloads/chromedriver_win32/chromedriver.exe"
driver = webdriver.Chrome(chromedriver)
driver.set_window_size(1200,700)
driver.get("http://localhost:4200")
driver.find_element_by_xpath("/html/body/app-root/div/nav/a[4]").click()
names = ['modi','pranav','hrishikesh','kalvankar','atharva','shreyas']
passwords = ['hindurashtra','85412','aavvc','qwsad','45210','pappu']
name_exist = 'Username already exists'
open('sign.txt','w').close()

def signup(names,passwords):
    for i in range(0,6):
        driver.refresh()
        name = driver.find_element_by_xpath("/html/body/app-root/app-sign-up/div/form/div[1]/input")
        name.clear()
        name.send_keys(names[i])

        email = driver.find_element_by_xpath("/html/body/app-root/app-sign-up/div/form/div[2]/input")
        email.clear()
        email.send_keys(names[i]+'@xyz.com')

        user = driver.find_element_by_xpath("/html/body/app-root/app-sign-up/div/form/div[3]/input")
        user.clear()
        user.send_keys(names[i])

        passw = driver.find_element_by_xpath("/html/body/app-root/app-sign-up/div/form/div[4]/input")
        passw.clear()
        passw.send_keys(passwords[i])

        cond = driver.find_element_by_css_selector("body > app-root > app-sign-up > div > form > div.form-check.mb-3 > input")
        cond.click()

        clicksign = driver.find_element_by_xpath("/html/body/app-root/app-sign-up/div/form/button").click()

        exists1 = driver.find_element_by_id('username_test').text
        if exists1 == '':
            exists2 = driver.find_element_by_id('succ_test').text


        with open ('sign.txt','a') as file:
            if 'Success' == exists2:
                file.write(names[i]+' : '+'Success')
                file.write('\n')
                exists2 = ''
            if name_exist == exists1:
                file.write(names[i] +' : '+name_exist)
                file.write('\n')
                exists1 = ''




signup(names,passwords)
driver.quit()
