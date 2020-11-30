from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
chromedriver = "C:/Users/Atharva Patil/Downloads/chromedriver_win32/chromedriver.exe"
driver = webdriver.Chrome(chromedriver)
driver.set_window_size(1200,700)
driver.get("http://localhost:4200")

search = driver.find_element_by_css_selector('body > app-root > div > nav > a:nth-child(2)')
search.click()
open ('outputs/search.txt' ,'w').close()
criteria = ['program','computer','hello','car','xfgrgsfgs']

def image_search(criteria):
    for i in range(0,5):
        text = driver.find_element_by_css_selector('#searchinput')
        text.clear()
        text.send_keys(criteria[i],Keys.ENTER)
        time.sleep(5)
        source = []
        images = driver.find_elements_by_tag_name('img')
        for image in images :
            source.append(image.get_attribute('src'))

        with open ('outputs/search.txt' ,'a') as file:
            if len(source) == 0:
                file.write(criteria[i]+" : "+"No results")
                file.write('\n')
            else :
                for j in source :
                    file.write(criteria[i]+' : '+str(j))
                    file.write('\n')






image_search(criteria)
driver.quit()
