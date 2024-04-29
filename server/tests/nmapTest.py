import json
import sys
import subprocess
import nmap

# Çıktı kodlamasını UTF-8 olarak belirle
sys.stdout.reconfigure(encoding='utf-8')

nmap_path = ["C:/Program Files (x86)/Nmap/nmap.exe"]

def get_http_headers(url):
    try:
        if not url.startswith("http://") and not url.startswith("https://"):
            url = "http://" + url
        result = subprocess.check_output(["curl", "-sS", "-I", url])  # -sS seçeneği eklenerek ilerleme çubuğu ve hata mesajları bastırılmaz
        headers = result.decode("utf-8").split("\n")
        headers_dict = {}
        for header in headers:
            if ":" in header:
                key, value = header.split(":", 1)
                headers_dict[key.strip()] = value.strip()
        return headers_dict
    except Exception as e:
        print("Curl hatası:", str(e))

def nmap_scan(url):
    try:
        scanner = nmap.PortScanner(nmap_search_path=nmap_path)
        scanner.scan(url, arguments="-p 21,22,80,443,3306,5432")
        nmap_output = {}
        for host in scanner.all_hosts():
            nmap_output[host] = {}
            for proto in scanner[host].all_protocols():
                nmap_output[host][proto] = {}
                ports = scanner[host][proto].keys()
                for port in ports:
                    state = scanner[host][proto][port]['state']
                    service = scanner[host][proto][port]['name']
                    nmap_output[host][proto][port] = {'state': state, 'service': service}
        return nmap_output
    except Exception as e:
        print("Nmap hatası:", str(e))

if __name__ == "__main__":
    if len(sys.argv) > 1:
        url = sys.argv[1]
    else:
        print("\n")
        url = input("Hedef URL'yi girin: ")
        print("\n")
    
    # Başlık bilgilerini al ve JSON formatında yazdır
    headers = get_http_headers(url)
    print(json.dumps(headers, ensure_ascii=False, indent=4))
    
    # # Port ve Servis Taraması Yapılıyor ve JSON formatında yazdır
    nmap_output = nmap_scan(url)
    # print(json.dumps(nmap_output, ensure_ascii=False, indent=4))

        # JSON formatında verileri birleştir
    combined_data = {
        "headers": headers,
        "nmap_output": nmap_output
    }
    
    # JSON formatında yazdır
    print(json.dumps(combined_data, ensure_ascii=False, indent=4))
