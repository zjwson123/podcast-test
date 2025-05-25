// 播客App主要JavaScript逻辑

class PodcastApp {
    constructor() {
        this.currentPage = 'home';
        this.init();
    }

    init() {
        this.bindTabEvents();
        this.loadPage('home');
    }

    // 绑定底部Tab栏点击事件
    bindTabEvents() {
        const tabItems = document.querySelectorAll('.tab-item');
        tabItems.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const page = tab.dataset.page;
                this.switchTab(page);
            });
        });
    }

    // 切换Tab
    switchTab(page) {
        if (this.currentPage === page) return;

        // 瞬时切换，无需防抖
        // 更新Tab状态
        this.updateTabState(page);
        
        // 更新导航栏标题
        this.updateNavTitle(page);
        
        // 更新迷你播放器显示状态
        this.updateMiniPlayer(page);
        
        // 加载页面内容
        this.loadPage(page);
        
        this.currentPage = page;
    }

    // 更新Tab状态
    updateTabState(activePage) {
        const tabItems = document.querySelectorAll('.tab-item');
        tabItems.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.page === activePage) {
                tab.classList.add('active');
            }
        });
    }

    // 更新导航栏标题
    updateNavTitle(page) {
        const navTitle = document.getElementById('nav-title');
        const titles = {
            home: '播客',
            discover: '发现',
            player: '正在播放',
            subscriptions: '我的订阅',
            profile: '我的'
        };
        navTitle.textContent = titles[page] || '播客';
    }

    // 更新迷你播放器显示状态
    updateMiniPlayer(page) {
        const miniPlayer = document.getElementById('mini-player');
        if (page === 'player') {
            miniPlayer.style.display = 'none';
        } else {
            miniPlayer.style.display = 'flex';
        }
    }

    // 加载页面内容
    loadPage(page) {
        const mainContent = document.querySelector('.main-content');
        
        try {
            const content = this.getPageContent(page);
            
            // 瞬时切换，类似微信的效果
            mainContent.innerHTML = content;
            
        } catch (error) {
            console.error('加载页面失败:', error);
            mainContent.innerHTML = '<div style="text-align: center; padding: 40px; color: #8E8E93;">加载失败，请重试</div>';
        }
    }

    // 获取页面内容
    getPageContent(page) {
        const contents = {
            home: this.getHomeContent(),
            discover: this.getDiscoverContent(),
            player: this.getPlayerContent(),
            subscriptions: this.getSubscriptionsContent(),
            profile: this.getProfileContent()
        };
        
        return contents[page] || contents.home;
    }

    // 首页内容
    getHomeContent() {
        return `
            <!-- 推荐横幅 -->
            <div class="gradient-bg" style="height: 200px; margin: 16px; border-radius: 16px; position: relative; overflow: hidden; background: linear-gradient(135deg, #FF6B35, #F7931E);">
                <!-- 背景遮罩 -->
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(255,107,53,0.8), rgba(247,147,30,0.6));"></div>
                <!-- 文字内容 -->
                <div style="position: absolute; bottom: 20px; left: 20px; color: white; z-index: 2;">
                    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 8px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">今日推荐</h2>
                    <p style="font-size: 16px; opacity: 0.95; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">发现你可能喜欢的播客</p>
                </div>
                <!-- 装饰图片 -->
                <img src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=200&fit=crop" 
                     style="position: absolute; top: 15px; right: 15px; width: 120px; height: 120px; object-fit: cover; border-radius: 12px; opacity: 0.8; z-index: 1;">
            </div>

            <!-- 最近播放 -->
            <div style="margin: 24px 16px 16px;">
                <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 16px;">最近播放</h3>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">科技聊天室</h4>
                    <p class="podcast-subtitle">第42期：AI的未来发展趋势</p>
                    <p class="podcast-meta">已播放 23分钟 / 共 45分钟</p>
                </div>
                <button style="background: none; border: none; font-size: 20px; color: #FF6B35;">
                    <i class="fas fa-play"></i>
                </button>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">商业思维</h4>
                    <p class="podcast-subtitle">创业者的第一堂课</p>
                    <p class="podcast-meta">已播放 15分钟 / 共 38分钟</p>
                </div>
                <button style="background: none; border: none; font-size: 20px; color: #FF6B35;">
                    <i class="fas fa-play"></i>
                </button>
            </div>

            <!-- 热门推荐 -->
            <div style="margin: 32px 16px 16px;">
                <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 16px;">热门推荐</h3>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">深度对话</h4>
                    <p class="podcast-subtitle">与行业领袖的深度访谈</p>
                    <p class="podcast-meta">更新于 2小时前</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #007AFF;">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">文化漫谈</h4>
                    <p class="podcast-subtitle">探索世界各地的文化差异</p>
                    <p class="podcast-meta">更新于 1天前</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #007AFF;">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">健康生活</h4>
                    <p class="podcast-subtitle">专业医生的健康建议</p>
                    <p class="podcast-meta">更新于 3天前</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #007AFF;">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
    }

    // 发现页内容
    getDiscoverContent() {
        return `
            <!-- 搜索框 -->
            <div style="padding: 16px;">
                <div class="search-box">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="搜索播客、主播或话题">
                </div>
            </div>

            <!-- 分类标签 -->
            <div style="padding: 0 16px; margin-bottom: 24px;">
                <div style="display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px;">
                    <span class="category-tag active">全部</span>
                    <span class="category-tag">科技</span>
                    <span class="category-tag">商业</span>
                    <span class="category-tag">文化</span>
                    <span class="category-tag">健康</span>
                    <span class="category-tag">教育</span>
                </div>
            </div>

            <!-- 热门播客 -->
            <div style="margin: 0 16px 16px;">
                <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 16px;">热门播客</h3>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">科技前沿</h4>
                    <p class="podcast-subtitle">探索最新科技趋势</p>
                    <p class="podcast-meta">1.2万订阅 • 每周更新</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #007AFF;">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">创业故事</h4>
                    <p class="podcast-subtitle">成功企业家的创业经历</p>
                    <p class="podcast-meta">8.5k订阅 • 每周更新</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #007AFF;">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">人文历史</h4>
                    <p class="podcast-subtitle">回顾历史，思考现在</p>
                    <p class="podcast-meta">6.8k订阅 • 每周更新</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #007AFF;">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">心理学课堂</h4>
                    <p class="podcast-subtitle">了解自己，理解他人</p>
                    <p class="podcast-meta">9.2k订阅 • 每周更新</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #007AFF;">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">音乐故事</h4>
                    <p class="podcast-subtitle">每首歌背后的故事</p>
                    <p class="podcast-meta">5.4k订阅 • 每周更新</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #007AFF;">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
    }

    // 播放器页面内容
    getPlayerContent() {
        return `
            <div style="display: flex; flex-direction: column; align-items: center; padding: 40px 20px; height: 100%; justify-content: center;">
                <!-- 播客封面 -->
                <div class="player-cover">
                    <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300&h=300&fit=crop" 
                         alt="播客封面" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
                </div>

                <!-- 播客信息 -->
                <div class="player-info">
                    <h2 class="player-title">科技聊天室</h2>
                    <p class="player-subtitle">第42期：AI的未来发展趋势</p>
                </div>

                <!-- 进度条 -->
                <div class="progress-bar">
                    <div class="progress-track">
                        <div class="progress-fill" style="width: 45%;"></div>
                    </div>
                    <div class="progress-time">
                        <span>23:45</span>
                        <span>45:30</span>
                    </div>
                </div>

                <!-- 播放控制 -->
                <div class="player-controls">
                    <button class="player-btn">
                        <i class="fas fa-backward"></i>
                    </button>
                    <button class="player-btn">
                        <i class="fas fa-undo"></i>
                    </button>
                    <button class="player-btn play">
                        <i class="fas fa-pause"></i>
                    </button>
                    <button class="player-btn">
                        <i class="fas fa-redo"></i>
                    </button>
                    <button class="player-btn">
                        <i class="fas fa-forward"></i>
                    </button>
                </div>

                <!-- 额外控制 -->
                <div style="display: flex; justify-content: space-between; width: 100%; margin-top: 30px; padding: 0 20px;">
                    <button style="background: none; border: none; font-size: 20px; color: #8E8E93;">
                        <i class="fas fa-list"></i>
                    </button>
                    <button style="background: none; border: none; font-size: 20px; color: #8E8E93;">
                        <i class="fas fa-share"></i>
                    </button>
                    <button style="background: none; border: none; font-size: 20px; color: #8E8E93;">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button style="background: none; border: none; font-size: 20px; color: #8E8E93;">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // 订阅页面内容
    getSubscriptionsContent() {
        return `
            <div style="padding: 16px;">
                <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 16px;">我的订阅</h3>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">科技聊天室</h4>
                    <p class="podcast-subtitle">已更新 • 第43期</p>
                    <p class="podcast-meta">订阅于 2023年1月</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #FF6B35;">
                    <i class="fas fa-bell"></i>
                </button>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">商业思维</h4>
                    <p class="podcast-subtitle">已更新 • 创业新思路</p>
                    <p class="podcast-meta">订阅于 2023年2月</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #FF6B35;">
                    <i class="fas fa-bell"></i>
                </button>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">深度对话</h4>
                    <p class="podcast-subtitle">3天前更新</p>
                    <p class="podcast-meta">订阅于 2023年3月</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #8E8E93;">
                    <i class="fas fa-bell-slash"></i>
                </button>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">文化漫谈</h4>
                    <p class="podcast-subtitle">1周前更新</p>
                    <p class="podcast-meta">订阅于 2023年1月</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #8E8E93;">
                    <i class="fas fa-bell-slash"></i>
                </button>
            </div>

            <div class="podcast-item">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=120&fit=crop" 
                     alt="播客封面" class="podcast-cover">
                <div class="podcast-info">
                    <h4 class="podcast-title">健康生活</h4>
                    <p class="podcast-subtitle">2周前更新</p>
                    <p class="podcast-meta">订阅于 2023年4月</p>
                </div>
                <button style="background: none; border: none; font-size: 16px; color: #8E8E93;">
                    <i class="fas fa-bell-slash"></i>
                </button>
            </div>
        `;
    }

    // 个人中心页面内容
    getProfileContent() {
        return `
            <!-- 用户信息 -->
            <div style="text-align: center; padding: 40px 20px 30px;">
                <div style="width: 80px; height: 80px; border-radius: 40px; background: linear-gradient(45deg, #FF6B35, #F7931E); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-user" style="font-size: 32px; color: white;"></i>
                </div>
                <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">播客爱好者</h2>
                <p style="color: #8E8E93; font-size: 16px;">已收听 156 小时</p>
            </div>

            <!-- 统计信息 -->
            <div style="display: flex; justify-content: space-around; padding: 20px; background: #F8F9FA; margin: 0 16px; border-radius: 12px; margin-bottom: 24px;">
                <div style="text-align: center;">
                    <div style="font-size: 24px; font-weight: 600; color: #FF6B35;">12</div>
                    <div style="font-size: 14px; color: #8E8E93;">订阅</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 24px; font-weight: 600; color: #FF6B35;">45</div>
                    <div style="font-size: 14px; color: #8E8E93;">收藏</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 24px; font-weight: 600; color: #FF6B35;">156</div>
                    <div style="font-size: 14px; color: #8E8E93;">小时</div>
                </div>
            </div>

            <!-- 菜单选项 -->
            <div style="padding: 0 16px;">
                <div style="background: white; border-radius: 12px; overflow: hidden;">
                    <div style="display: flex; align-items: center; padding: 16px; border-bottom: 1px solid #F0F0F0;">
                        <i class="fas fa-download" style="font-size: 18px; color: #FF6B35; width: 24px;"></i>
                        <span style="margin-left: 12px; font-size: 16px;">下载管理</span>
                        <i class="fas fa-chevron-right" style="margin-left: auto; color: #C7C7CC;"></i>
                    </div>
                    <div style="display: flex; align-items: center; padding: 16px; border-bottom: 1px solid #F0F0F0;">
                        <i class="fas fa-history" style="font-size: 18px; color: #FF6B35; width: 24px;"></i>
                        <span style="margin-left: 12px; font-size: 16px;">播放历史</span>
                        <i class="fas fa-chevron-right" style="margin-left: auto; color: #C7C7CC;"></i>
                    </div>
                    <div style="display: flex; align-items: center; padding: 16px; border-bottom: 1px solid #F0F0F0;">
                        <i class="fas fa-heart" style="font-size: 18px; color: #FF6B35; width: 24px;"></i>
                        <span style="margin-left: 12px; font-size: 16px;">我的收藏</span>
                        <i class="fas fa-chevron-right" style="margin-left: auto; color: #C7C7CC;"></i>
                    </div>
                    <div style="display: flex; align-items: center; padding: 16px;">
                        <i class="fas fa-cog" style="font-size: 18px; color: #FF6B35; width: 24px;"></i>
                        <span style="margin-left: 12px; font-size: 16px;">设置</span>
                        <i class="fas fa-chevron-right" style="margin-left: auto; color: #C7C7CC;"></i>
                    </div>
                </div>
            </div>

            <!-- 其他选项 -->
            <div style="padding: 16px; margin-top: 24px;">
                <div style="background: white; border-radius: 12px; overflow: hidden;">
                    <div style="display: flex; align-items: center; padding: 16px; border-bottom: 1px solid #F0F0F0;">
                        <i class="fas fa-question-circle" style="font-size: 18px; color: #8E8E93; width: 24px;"></i>
                        <span style="margin-left: 12px; font-size: 16px;">帮助与反馈</span>
                        <i class="fas fa-chevron-right" style="margin-left: auto; color: #C7C7CC;"></i>
                    </div>
                    <div style="display: flex; align-items: center; padding: 16px;">
                        <i class="fas fa-info-circle" style="font-size: 18px; color: #8E8E93; width: 24px;"></i>
                        <span style="margin-left: 12px; font-size: 16px;">关于我们</span>
                        <i class="fas fa-chevron-right" style="margin-left: auto; color: #C7C7CC;"></i>
                    </div>
                </div>
            </div>
        `;
    }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new PodcastApp();
}); 