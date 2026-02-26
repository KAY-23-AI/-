(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const u={0:{svg:"sun",desc:"晴"},1:{svg:"cloud-sun",desc:"大部晴朗"},2:{svg:"cloud",desc:"多云"},3:{svg:"cloud",desc:"阴"},45:{svg:"fog",desc:"雾"},48:{svg:"fog",desc:"冻雾"},51:{svg:"rain",desc:"小雨"},53:{svg:"rain",desc:"中雨"},55:{svg:"rain",desc:"大雨"},61:{svg:"rain",desc:"小雨"},63:{svg:"rain",desc:"中雨"},65:{svg:"rain",desc:"大雨"},66:{svg:"snow",desc:"冻雨"},67:{svg:"snow",desc:"强冻雨"},71:{svg:"snow",desc:"小雪"},73:{svg:"snow",desc:"中雪"},75:{svg:"snow",desc:"大雪"},77:{svg:"snow",desc:"雪粒"},80:{svg:"rain",desc:"阵雨"},81:{svg:"rain",desc:"中阵雨"},82:{svg:"rain",desc:"大阵雨"},85:{svg:"snow",desc:"小阵雪"},86:{svg:"snow",desc:"大阵雪"},95:{svg:"storm",desc:"雷暴"},96:{svg:"storm",desc:"雷暴伴小冰雹"},99:{svg:"storm",desc:"雷暴伴大冰雹"}};function g(t){const e={sun:'<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/></svg>',"cloud-sun":'<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>',cloud:'<svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"/></svg>',fog:'<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15h18M3 12h18M3 9h18"/></svg>',rain:'<svg class="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 15H6.75a5.25 5.25 0 01-2.23-4.964 6.053 6.053 0 01.02-.286z"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/></svg>',snow:'<svg class="w-5 h-5 text-blue-100" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l1.09 3.26L16 6l-2.91.74L12 10l-1.09-3.26L8 6l2.91-.74L12 2zm0 12l1.09 3.26L16 18l-2.91.74L12 22l-1.09-3.26L8 18l2.91-.74L12 14z"/></svg>',storm:'<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'};return e[t]||e.cloud}function p(){const t=document.getElementById("app");if(!t){console.error("App element not found");return}const e="https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2Fimage.png&nonce=c7ba7559-7440-4e93-a050-b83f0365d1c0&project_id=7610612308208828459&sign=73893cef0474bf14348a8f5dd62c08f254ba8c2f23ee01b1b8678b6e7a814163";t.innerHTML=`
    <div class="min-h-screen bg-cover bg-center bg-no-repeat relative" style="background-image: url('${e}');">
      <!-- 边缘虚化遮罩 -->
      <div class="fixed inset-0 pointer-events-none" style="box-shadow: inset 0 0 150px 80px rgba(255,255,255,0.6);"></div>
      
      <!-- 天气组件 - 左上角紧贴边缘，宽度撑满，无圆角，图片背景 -->
      <div id="weather-widget" class="fixed top-0 left-0 w-full overflow-hidden bg-cover bg-center" style="background-image: url('${e}'); background-position: top left;">
        <!-- 内容层 -->
        <div class="relative px-4 pt-2 pb-8">
          <!-- 上层：时间日期星期 -->
          <div class="flex items-center justify-start gap-3 pb-2 border-b border-white/30">
            <span id="current-time" class="text-base font-medium text-white leading-6">--:--:--</span>
            <span id="current-date" class="text-base font-medium text-white/90 leading-6">--月--日</span>
            <span id="current-weekday" class="text-base font-medium text-white/80 leading-6">星期-</span>
          </div>
          
          <!-- 下层：地点 天气 温湿度 -->
          <div class="flex items-center justify-start gap-3 pt-2">
            <!-- 地点 -->
            <div class="flex items-center gap-1">
              <svg class="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="text-base font-medium text-white leading-6">上海</span>
            </div>
            
            <!-- 分隔点 -->
            <span class="text-white/50">·</span>
            
            <!-- 天气图标 -->
            <span id="weather-icon" class="inline-flex items-center" title="加载中">🌡️</span>
            
            <!-- 天气描述 -->
            <span id="weather-desc" class="text-base font-medium text-white leading-6">--</span>
            
            <!-- 分隔点 -->
            <span class="text-white/50">·</span>
            
            <!-- 温度 -->
            <span id="temperature" class="text-base font-medium text-white leading-6">--°C</span>
            
            <!-- 分隔点 -->
            <span class="text-white/50">·</span>
            
            <!-- 湿度 -->
            <div class="flex items-center gap-1">
              <svg class="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
              <span id="humidity" class="text-base font-medium text-white leading-6">--%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,d(),setInterval(d,1e3),a(),setInterval(()=>a(),300*1e3),document.addEventListener("visibilitychange",()=>{document.hidden||(console.log("[天气] 页面重新可见，重新获取天气数据"),a())}),window.addEventListener("focus",()=>{console.log("[天气] 页面获得焦点，重新获取天气数据"),a()})}function r(t,e){const n=document.getElementById(t);n?n.textContent=e:console.warn(`[天气] 元素 ${t} 不存在`)}function l(t,e){const n=document.getElementById(t);n?n.innerHTML=e:console.warn(`[天气] 元素 ${t} 不存在`)}function d(){const t=new Date,e=t.toLocaleTimeString("zh-CN",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"}),n=t.toLocaleDateString("zh-CN",{month:"long",day:"numeric"}),i=t.toLocaleDateString("zh-CN",{weekday:"long"});r("current-time",e),r("current-date",n),r("current-weekday",i)}async function a(t=0){console.log(`[天气] 开始获取天气数据... (重试次数: ${t})`);try{const e=await fetch("https://api.open-meteo.com/v1/forecast?latitude=31.2304&longitude=121.4737&current=temperature_2m,relative_humidity_2m,weather_code&timezone=Asia/Shanghai");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const n=await e.json();console.log("[天气] 数据获取成功:",n.current),r("temperature",`${Math.round(n.current.temperature_2m)}°C`),r("humidity",`${n.current.relative_humidity_2m}%`);const i=u[n.current.weather_code]||{svg:"cloud",desc:"未知"};l("weather-icon",g(i.svg));const s=document.getElementById("weather-icon");s&&(s.title=i.desc),r("weather-desc",i.desc)}catch(e){console.error("[天气] 获取天气数据失败:",e),t<3?(console.log(`[天气] 2秒后重试... (${t+1}/3)`),setTimeout(()=>a(t+1),2e3)):(console.error("[天气] 重试次数已用尽，放弃获取"),r("temperature","--°C"),r("humidity","--%"),l("weather-icon",""),r("weather-desc","获取失败"))}}p();
