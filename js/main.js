// Banking Modernization Report - Main JavaScript
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏦 Banking Modernization Report initialized');
    
    // Configuration Data
    const STRATEGY_DATA = {
        rehost: {
            title: 'Rehost (Lift and Shift)',
            emoji: '📦',
            description: 'Move applications to modern cloud infrastructure with minimal or no modifications to the underlying code. Often the fastest migration approach.',
            pros: 'Fastest migration path, lowest initial cost, minimal business disruption, quick datacenter exit',
            cons: 'Limited cloud optimization, may inherit legacy inefficiencies, potential for "cloud shock" from unoptimized resource usage',
            use_case: 'Non-critical applications, initial cloud adoption, emergency datacenter exit scenarios'
        },
        replatform: {
            title: 'Replatform (Lift, Tinker, and Shift)',
            emoji: '🔧',
            description: 'Make minimal code or configuration changes to applications to enable them to run more effectively on new cloud runtime platforms.',
            pros: 'Balances speed with cloud optimization, preserves existing language/code investment, moderate complexity',
            cons: 'Requires some development effort, may not fully leverage cloud-native benefits, dependency management complexity',
            use_case: 'Core banking systems needing middleware updates, applications requiring minimal cloud optimization'
        },
        refactor: {
            title: 'Refactor (Re-architect)',
            emoji: '🏗️',
            description: 'Make significant changes to existing code without altering external behavior, often decomposing monolithic components into microservices.',
            pros: 'Improved scalability and resilience, full cloud optimization, enhanced agility for future changes',
            cons: 'High complexity and cost, significant code changes required, requires deep understanding of legacy business logic',
            use_case: 'High-value applications requiring greater agility, components needing independent scaling'
        },
        rebuild: {
            title: 'Rebuild / Rewrite',
            emoji: '🆕',
            description: 'Start over and build new applications from scratch when the cost of other migration strategies outweighs the benefits.',
            pros: 'Addresses all legacy issues, incorporates modern features, enables rapid innovation, clean architecture',
            cons: 'Most complex and resource-intensive, highest risk of scope creep, potentially long development cycles',
            use_case: 'Severely outdated applications, new digital banking initiatives, greenfield product development'
        },
        retire: {
            title: 'Retire',
            emoji: '🗑️',
            description: 'Decommission or shut down applications that no longer provide sufficient business value or have been replaced.',
            pros: 'Reduces maintenance costs, frees up resources, simplifies IT landscape, eliminates technical debt',
            cons: 'Potential loss of functionality, data archiving requirements, change management challenges',
            use_case: 'Obsolete applications, redundant systems, end-of-life products with no business value'
        },
        retain: {
            title: 'Retain',
            emoji: '🏛️',
            description: 'Keep applications on existing mainframe infrastructure due to high migration costs, complex dependencies, or unacceptable risks.',
            pros: 'Lowest risk option, preserves existing investment, leverages proven mainframe reliability and security',
            cons: 'Limits organizational agility, continued high maintenance costs, dependency on aging workforce',
            use_case: 'Mission-critical core operations, highly stable systems with complex dependencies, risk-averse scenarios'
        }
    };

    const VENDOR_DATA = {
        aws: {
            name: 'Amazon Web Services (AWS)',
            emoji: '🟠',
            strategy: 'Comprehensive automation-first approach leveraging AI and machine learning to accelerate code transformation through services like AWS Blu Age for refactoring and extensive partnership ecosystem for replatforming.',
            offering: 'AWS Mainframe Modernization service provides end-to-end capabilities including automated assessment, AI-powered refactoring, replatforming tools, comprehensive testing frameworks, and seamless data replication with AWS Transform.',
            keyFeatures: ['AWS Blu Age automated refactoring', 'Mainframe Assessment Tool', 'AI-powered code transformation', 'Integrated testing environments']
        },
        ibm: {
            name: 'IBM',
            emoji: '🔵',
            strategy: 'Hybrid cloud strategy positioning mainframe as the secure, resilient core of modern infrastructure, challenging the "migrate everything off mainframe" narrative with intelligent modernization approaches.',
            offering: 'IBM z/Hybrid Cloud solutions featuring latest IBM z16 systems with zIIP processors for cost optimization, watsonx Code Assistant for Z providing AI-powered modernization, and comprehensive hybrid integration capabilities.',
            keyFeatures: ['watsonx Code Assistant for Z', 'z/OS Cloud Broker', 'Hybrid cloud integration', 'zIIP processor optimization']
        },
        google: {
            name: 'Google Cloud',
            emoji: '🔴',
            strategy: 'AI-first approach leveraging advanced Generative AI (Gemini models) for intelligent code analysis, transformation, and validation, with emphasis on risk mitigation through parallel execution capabilities.',
            offering: 'Google Cloud Mainframe Modernization suite including sophisticated Mainframe Assessment Tool (MAT), AI-powered Mainframe Rewrite capabilities, and innovative "Dual Run" parallel testing solution for risk-free validation.',
            keyFeatures: ['Gemini AI code analysis', 'Dual Run testing', 'Mainframe Assessment Tool', 'AI-powered rewrite capabilities']
        },
        azure: {
            name: 'Microsoft Azure',
            emoji: '🟦',
            strategy: 'Holistic ecosystem approach covering the entire modernization lifecycle with deep integration across Microsoft\'s comprehensive cloud-native services portfolio and extensive partner network.',
            offering: 'Complete migration roadmap powered by Azure Migrate, strategic partnerships with specialized tools like Royal Cyber, and seamless integration with AKS (Kubernetes), Azure DevOps for CI/CD, and Power BI for analytics.',
            keyFeatures: ['Azure Migrate assessment', 'AKS integration', 'Azure DevOps integration', 'Power BI analytics']
        },
        microfocus: {
            name: 'Micro Focus',
            emoji: '🟢',
            strategy: 'Gradual modernization philosophy focusing on optimizing and modernizing within or incrementally from mainframe environments, specifically designed for risk-averse organizations requiring careful transformation.',
            offering: 'Specialized COBOL conversion tools, comprehensive Host Access Analyzer for deep visibility into mainframe usage patterns, and solutions supporting incremental improvements with detailed risk assessment capabilities.',
            keyFeatures: ['COBOL conversion tools', 'Host Access Analyzer', 'Incremental modernization', 'Risk assessment frameworks']
        }
    };

    // Utility Functions
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
    }

    // Strategy Management
    class StrategyManager {
        constructor() {
            this.buttons = document.querySelectorAll('.strategy-btn');
            this.content = document.getElementById('strategy-content');
            this.currentStrategy = 'rehost';
            this.init();
        }

        init() {
            this.buttons.forEach(button => {
                button.addEventListener('click', (e) => this.selectStrategy(e.target.dataset.strategy));
                button.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.selectStrategy(e.target.dataset.strategy);
                    }
                });
            });
            this.updateContent('rehost');
        }

        selectStrategy(strategy) {
            if (strategy === this.currentStrategy) return;
            
            this.buttons.forEach(btn => {
                const isActive = btn.dataset.strategy === strategy;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-selected', isActive);
            });
            
            this.currentStrategy = strategy;
            this.updateContent(strategy);
            announceToScreenReader(`Selected ${STRATEGY_DATA[strategy].title} strategy`);
        }

        updateContent(strategy) {
            const data = STRATEGY_DATA[strategy];
            if (!data || !this.content) return;

            this.content.innerHTML = `
                <div class="text-center mb-6">
                    <div class="text-4xl mb-2">${data.emoji}</div>
                    <h3 class="text-2xl font-bold text-gray-800">${data.title}</h3>
                </div>
                <p class="text-gray-600 mb-6 text-center leading-relaxed">${data.description}</p>
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div class="pros-card">
                        <h4 class="font-bold text-green-800 mb-2 flex items-center">
                            <span class="text-lg mr-2">✅</span> Advantages
                        </h4>
                        <p class="text-green-700 text-sm leading-relaxed">${data.pros}</p>
                    </div>
                    <div class="cons-card">
                        <h4 class="font-bold text-red-800 mb-2 flex items-center">
                            <span class="text-lg mr-2">⚠️</span> Challenges
                        </h4>
                        <p class="text-red-700 text-sm leading-relaxed">${data.cons}</p>
                    </div>
                </div>
                <div class="use-case-card">
                    <h4 class="font-bold text-blue-800 mb-2 flex items-center">
                        <span class="text-lg mr-2">🎯</span> Banking Use Cases
                    </h4>
                    <p class="text-blue-700 text-sm leading-relaxed">${data.use_case}</p>
                </div>
            `;
        }
    }

    // Vendor Management
    class VendorManager {
        constructor() {
            this.logos = document.querySelectorAll('.vendor-logo');
            this.content = document.getElementById('vendor-content');
            this.currentVendor = null;
            this.init();
        }

        init() {
            this.logos.forEach(logo => {
                logo.addEventListener('click', () => this.selectVendor(logo.dataset.vendor));
                logo.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.selectVendor(logo.dataset.vendor);
                    }
                });
            });
        }

        selectVendor(vendor) {
            if (vendor === this.currentVendor) return;

            this.logos.forEach(logo => {
                logo.classList.toggle('active', logo.dataset.vendor === vendor);
            });

            this.currentVendor = vendor;
            this.updateContent(vendor);
            announceToScreenReader(`Selected ${VENDOR_DATA[vendor].name} information`);
        }

        updateContent(vendor) {
            const data = VENDOR_DATA[vendor];
            if (!data || !this.content) return;

            this.content.style.opacity = '0';
            setTimeout(() => {
                this.content.innerHTML = `
                    <div class="text-center mb-6">
                        <div class="text-4xl mb-2">${data.emoji}</div>
                        <h3 class="text-2xl font-bold text-gray-800">${data.name}</h3>
                    </div>
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h4 class="font-bold text-blue-800 mb-2 flex items-center">
                                <span class="text-lg mr-2">🎯</span> Core Strategy
                            </h4>
                            <p class="text-blue-700 text-sm leading-relaxed">${data.strategy}</p>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h4 class="font-bold text-green-800 mb-2 flex items-center">
                                <span class="text-lg mr-2">🛠️</span> Key Offerings
                            </h4>
                            <p class="text-green-700 text-sm leading-relaxed">${data.offering}</p>
                        </div>
                        <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                            <h4 class="font-bold text-purple-800 mb-2 flex items-center">
                                <span class="text-lg mr-2">⭐</span> Key Features
                            </h4>
                            <ul class="text-purple-700 text-sm space-y-1">
                                ${data.keyFeatures.map(feature => `<li class="flex items-start"><span class="text-purple-500 mr-2">•</span>${feature}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                this.content.style.opacity = '1';
            }, 300);
        }
    }

    // Chart Management
    class ChartManager {
        constructor() {
            this.charts = {};
            this.init();
        }

        init() {
            if (typeof Chart === 'undefined') {
                console.warn('Chart.js not loaded');
                return;
            }
            this.createBenefitsChart();
            this.createMaintenanceChart();
        }

        createBenefitsChart() {
            const ctx = document.getElementById('benefitsChart');
            if (!ctx) return;

            this.charts.benefits = new Chart(ctx.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Product Launch Speed', 'Staff Productivity', 'Fraud Reduction', 'IT Maintenance Cost', 'Operational Risk'],
                    datasets: [{
                        label: 'Improvement (%)',
                        data: [60, 50, 47, 40, 30],
                        backgroundColor: [
                            'rgba(34, 197, 94, 0.8)',
                            'rgba(59, 130, 246, 0.8)',
                            'rgba(168, 85, 247, 0.8)',
                            'rgba(249, 115, 22, 0.8)',
                            'rgba(239, 68, 68, 0.8)'
                        ],
                        borderColor: [
                            'rgb(34, 197, 94)',
                            'rgb(59, 130, 246)',
                            'rgb(168, 85, 247)',
                            'rgb(249, 115, 22)',
                            'rgb(239, 68, 68)'
                        ],
                        borderWidth: 2,
                        borderRadius: 4
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: 'white',
                            bodyColor: 'white',
                            callbacks: {
                                label: (context) => `${context.raw}% improvement`
                            }
                        }
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            max: 70,
                            ticks: {
                                callback: (value) => value + '%'
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.1)'
                            }
                        },
                        y: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
        }

        createMaintenanceChart() {
            const ctx = document.getElementById('maintenanceCostChart');
            if (!ctx) return;

            this.charts.maintenance = new Chart(ctx.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Legacy Maintenance', 'New Development'],
                    datasets: [{
                        data: [70, 30],
                        backgroundColor: [
                            'rgba(239, 68, 68, 0.8)',
                            'rgba(34, 197, 94, 0.8)'
                        ],
                        borderColor: [
                            'rgb(239, 68, 68)',
                            'rgb(34, 197, 94)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 20,
                                usePointStyle: true
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: 'white',
                            bodyColor: 'white',
                            callbacks: {
                                label: (context) => `${context.label}: ${context.raw}% of IT Budget`
                            }
                        }
                    }
                }
            });
        }
    }

    // Animation Management
    class AnimationManager {
        constructor() {
            this.init();
        }

        init() {
            const sections = document.querySelectorAll('.section-fade-in');
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
            );

            sections.forEach(section => observer.observe(section));
        }
    }

    // Navigation Management
    class NavigationManager {
        constructor() {
            this.init();
        }

        init() {
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('main section');
            const header = document.getElementById('header');
            const headerHeight = header ? header.offsetHeight : 0;

            // Smooth scrolling
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const target = document.getElementById(targetId);
                    if (target) {
                        const offsetTop = target.offsetTop - headerHeight - 20;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Active section highlighting
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            navLinks.forEach(link => {
                                const isActive = link.getAttribute('href').substring(1) === entry.target.id;
                                link.classList.toggle('active', isActive);
                            });
                        }
                    });
                },
                { rootMargin: `-${headerHeight}px 0px -50% 0px`, threshold: 0.1 }
            );

            sections.forEach(section => observer.observe(section));
        }
    }

    // Initialize all managers
    try {
        const strategyManager = new StrategyManager();
        const vendorManager = new VendorManager();
        const chartManager = new ChartManager();
        const animationManager = new AnimationManager();
        const navigationManager = new NavigationManager();

        console.log('✅ All managers initialized successfully');
    } catch (error) {
        console.error('❌ Error initializing application:', error);
    }
});
