import { motion } from "framer-motion";
import {
  Download,
  TerminalSquare,
  ShieldAlert,
  HelpCircle,
  FileCode2,
  CheckCircle2,
  Settings,
  Github,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <header className="fixed top-0 w-full border-b border-white/5 bg-background/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TerminalSquare className="w-6 h-6 text-primary" />
            <span className="font-mono font-bold tracking-tight text-lg">Discord Fix</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#download" className="hover:text-foreground transition-colors">Скачать</a>
            <a href="#instructions" className="hover:text-foreground transition-colors">Инструкция</a>
            <a href="#files" className="hover:text-foreground transition-colors">Файлы</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://github.com/blipperr/Discord-Fix" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
                <Badge variant="outline" className="font-mono bg-primary/10 text-primary border-primary/20 px-3 py-1">
                  v1.9.8c
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60">
                Исправьте Discord и YouTube в России
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Бесплатная утилита для обхода DPI блокировок на базе zapret. Работает без VPN. Надежное решение от сообщества.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4" id="download">
                <a href="https://github.com/blipperr/Discord-Fix/releases/download/Discord-Fix/zapret-discord-youtube-1.9.8c.zip" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto gap-2 font-mono h-14 px-8 text-base">
                    <Download className="w-5 h-5" />
                    Скачать ZIP
                  </Button>
                </a>
                <a href="https://github.com/blipperr/Discord-Fix/releases/download/Discord-Fix/zapret-discord-youtube-1.9.8c.rar" className="w-full sm:w-auto">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 font-mono h-14 px-8 text-base border border-white/10 hover:bg-secondary/80">
                    <Download className="w-5 h-5" />
                    Скачать RAR
                  </Button>
                </a>
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-6">
                 <a href="https://github.com/blipperr/Discord-Fix/releases" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1">
                   Все релизы на GitHub
                 </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Warnings */}
        <section className="py-12 border-y border-white/5 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-destructive/10 border-destructive/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-destructive flex items-center gap-2 text-lg">
                    <ShieldAlert className="w-5 h-5" />
                    Внимание: Антивирусы
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-destructive-foreground/90">
                  <p>Драйвер <strong>WinDivert</strong> может вызывать ложные срабатывания (например, <em>Not-a-virus:RiskTool.Multi.WinDivert</em>). Это нормально. Добавьте папку в исключения или отключите PUA. Бинарные файлы берутся из официального репозитория, проверяйте по хэшам.</p>
                </CardContent>
              </Card>
              <Card className="bg-orange-500/10 border-orange-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-orange-500 flex items-center gap-2 text-lg">
                    <AlertTriangle className="w-5 h-5" />
                    Остерегайтесь фейков
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-orange-200">
                  <p>Автор утилиты <strong>не ведёт</strong> Telegram или YouTube каналы. Всё, что распространяется вне официального GitHub репозитория — фейк и может содержать вредоносное ПО.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section id="instructions" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-12 text-center">Как установить и запустить</motion.h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Включите Secure DNS в браузере",
                    desc: "Chrome: Настройки → 'Использовать безопасный DNS'. Firefox: Настройки → 'DNS через HTTPS' → Максимальная защита + https://dns.google/dns-query. Windows 11 поддерживает настройку в параметрах ОС."
                  },
                  {
                    title: "Скачайте архив",
                    desc: "Загрузите ZIP или RAR архив со страницы релизов."
                  },
                  {
                    title: "Разблокируйте архив (опционально)",
                    desc: "Откройте свойства скачанного архива и поставьте галочку «Разблокировать» (не требуется при использовании 7-Zip или PeaZip)."
                  },
                  {
                    title: "Распакуйте в надежное место",
                    desc: "Распакуйте папку. Важно: путь к папке не должен содержать кириллицу (русские буквы) и спецсимволы."
                  },
                  {
                    title: "Запустите нужный файл",
                    desc: "Перейдите в папку и запустите general.bat для ручного старта или service.bat для установки как службы."
                  }
                ].map((step, i) => (
                  <motion.div variants={fadeInUp} key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-mono font-bold border border-primary/30">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Files */}
        <section id="files" className="py-20 bg-muted/20 border-y border-white/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4 text-center">Описание файлов</motion.h2>
              <motion.p variants={fadeInUp} className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Инструмент предоставляет несколько вариантов работы в зависимости от ваших нужд.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp}>
                  <Card className="h-full border-primary/20 bg-background/50">
                    <CardHeader>
                      <CardTitle className="font-mono flex items-center gap-2">
                        <FileCode2 className="w-5 h-5 text-primary" />
                        general.bat
                      </CardTitle>
                      <CardDescription>Ручной запуск утилиты</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Используется для ручного запуска и тестирования. При запуске предложит выбрать стратегию обхода (рекомендуется пробовать ALT FAKE и другие, если по умолчанию не работает).
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="h-full border-primary/20 bg-background/50">
                    <CardHeader>
                      <CardTitle className="font-mono flex items-center gap-2">
                        <Settings className="w-5 h-5 text-primary" />
                        service.bat
                      </CardTitle>
                      <CardDescription>Автозапуск и управление</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li><strong className="text-foreground">Install/Remove Service</strong>: Установка или удаление службы автозапуска.</li>
                        <li><strong className="text-foreground">Check Status</strong>: Проверка состояния службы.</li>
                        <li><strong className="text-foreground">Game Filter / IPSet Filter</strong>: Настройка фильтрации (none/loaded/any).</li>
                        <li><strong className="text-foreground">Update Hosts File</strong>: Починка веб-версии Telegram и голосовых чатов Discord.</li>
                        <li><strong className="text-foreground">Run Diagnostics / Tests</strong>: Поиск проблем, тестирование DPI и очистка кэша Discord.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold">Частые вопросы</h2>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">После general* ничего не происходит</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      Должен открыться процесс <code>winws.exe</code> в панели задач. Проверьте диспетчер задач.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">Не работает веб-Telegram или вечное подключение в Discord Voice</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      Запустите <code>service.bat</code> и выберите <strong>Update Hosts File</strong>. Убедитесь, что вы обновили файл hosts от имени администратора.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">Обход перестал работать</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      Стратегии обхода со временем могут устаревать у вашего провайдера. Попробуйте выбрать стратегию <strong>ALT</strong> или <strong>FAKE</strong> в <code>general.bat</code>. Также запустите <strong>Diagnostics</strong> в <code>service.bat</code>.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">Как правильно переустановить утилиту?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      1. Сделайте <strong>Remove Services</strong> в <code>service.bat</code>.<br/>
                      2. Запустите <strong>Diagnostics</strong>.<br/>
                      3. Удалите папку с утилитой.<br/>
                      4. Скачайте последнюю версию и распакуйте в путь без кириллицы.<br/>
                      5. Проверьте работу через <code>general.bat</code>.<br/>
                      6. Установите службу через <strong>Install Service</strong>.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">Не работает игра с запущенным запретом</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      В <code>service.bat</code> установите <strong>Game Filter</strong> в состояние <em>disabled</em>, а <strong>IPSet Filter</strong> в состояние <em>none</em>.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left">Античит ругается на WinDivert</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      Используйте скрытую версию драйвера: <a href="https://github.com/bol-van/zapret-win-bundle/tree/master/windivert-hide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">windivert-hide</a>.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-left">Windows 7 требует цифровую подпись</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      Замените файлы <code>WinDivert.dll</code> и <code>WinDivert64.sys</code> на версии из папки <code>zapret-win-bundle/win7</code> официального репозитория zapret.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-white/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <TerminalSquare className="w-5 h-5 text-muted-foreground" />
            <span className="font-mono font-semibold text-muted-foreground">Discord Fix</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
            Основан на проекте <a href="https://github.com/bol-van/zapret" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">zapret</a> от bol-van.<br/>
            Оригинальный репозиторий: <a href="https://github.com/Flowseal/zapret-discord-youtube" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Flowseal/zapret-discord-youtube</a>.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a href="https://github.com/blipperr/Discord-Fix" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" /> GitHub проекта
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="https://github.com/Flowseal/tg-ws-proxy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Ускоритель Telegram (tg-ws-proxy)
            </a>
          </div>
          <p className="text-xs text-muted-foreground/50 mt-8">
            Данный сайт носит информационный характер и не связан с официальными разработчиками Discord или YouTube.
          </p>
        </div>
      </footer>
    </div>
  );
}
